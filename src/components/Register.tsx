import React, { useState } from 'react';
import './Register.css';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonText, IonInput, IonButtons, IonButton, IonIcon, IonToast, IonLoading } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { register } from '../Firebase';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';

interface ContainerProps {
  closeModal: any;
}

const Register: React.FC<ContainerProps> = ({ closeModal }) => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
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

  const clickRegister = async () => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.email)) {
      setError('Please enter a valid email');
      setShowToast(true);
      return;
    }
    if(state.password !== state.repeatPassword) {
      setError('Passwords do not match');
      setShowToast(true);
      return;
    }
    setShowLoading(true);
    const res =  await register(state.name, state.email, state.password);
    setShowLoading(false);
    if(res && res.uid) {
      dispatch(setUserState(res));
    } else {
      if(res.message) {
        setError(res.message);
      } else {
        setError('There was an unexpected error creating your account, please try again');
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
              <IonTitle size="large">Register</IonTitle>
              <IonButtons slot="primary">
                <IonButton onClick={closeModal.bind()}>
                  <IonIcon slot="end" icon={closeOutline}/>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonList lines="full">
            <IonItem>
              <IonLabel position="stacked">Name <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="text" name="name" value={state.name} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="text" name="email" value={state.email} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="password" name="password" value={state.password} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Repeat Password <IonText color="danger">*</IonText></IonLabel>
              <IonInput required type="password" name="repeatPassword" value={state.repeatPassword} onIonChange={(e) => handleInputChange(e)}></IonInput>
            </IonItem>
          </IonList>
          <IonButton disabled={!state.name || !state.email || !state.password || !state.repeatPassword} expand="block" onClick={() => clickRegister()}>Register</IonButton>

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

export default Register;
