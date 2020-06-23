import React, { useState } from 'react';
import './Login.css';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonInput, IonButtons, IonButton, IonIcon, IonToast, IonLoading } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { login } from '../Firebase';
import { setUserState } from '../redux/actions';

interface ContainerProps {
  closeModal: any;
  goToRegister: any;
}

const Login: React.FC<ContainerProps> = ({ closeModal, goToRegister }) => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const [showToast, setShowToast] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setState({
      ...state,
      [name]: value
    });
  }

  const clickLogin = async () => {
    setShowLoading(true);
    const res =  await login(state.email, state.password);
    setShowLoading(false);
    if(res && res.uid) {
      dispatch(setUserState(res));
    } else {
      if(res.message) {
        setError(res.message);
      } else {
        setError('There was an unexpected error loging in, please try again');
      }
      setShowToast(true);
      return;
    }
    closeModal();
  }

  return (
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
              <IonButtons slot="primary">
                <IonButton onClick={closeModal.bind()}>
                  <IonIcon slot="end" icon={closeOutline}/>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonList lines="full">
            <IonItem>
              <IonLabel position="stacked">Email <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="text" name="email" value={state.email} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="password" name="password" value={state.password} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton expand="block" disabled={!state.email || !state.password} onClick={() => clickLogin()}>Login</IonButton>
          <IonButton fill="clear" expand="block">Forgot your password?</IonButton>

          <p className="no-account">Don't have a account?</p>
          <IonButton expand="block" onClick={goToRegister.bind()}>Register</IonButton>

          <IonToast
            color="danger"
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message={error}
            duration={2000}
          />

          <IonLoading
            isOpen={showLoading}
            message={'Please wait...'}
          />
        </IonContent>
  );
};

export default Login;
