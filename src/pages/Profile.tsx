import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/react';
import './Profile.css';
import { RouteComponentProps } from 'react-router';
import { closeOutline, pencilOutline } from 'ionicons/icons';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Firebase';
import { setUserState } from '../redux/actions';

const Profile: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  const user = useSelector((state: any) => state.userData);

  const dispatch = useDispatch();

  const clickLogout = () => {
    logout();
    dispatch(setUserState(null));
    close();
  }

  const close = () => {
    if(props.history.length > 0) {
      props.history.goBack();
    } else {
      props.history.push('/');
    }
  }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
                <IonIcon slot="end" icon={pencilOutline}/>
            </IonButton>
            <IonButton onClick={() => close()}>
              <IonIcon slot="end" icon={closeOutline}/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        { user ? (
        <div>
          <div className="top-profile">
            <img src={`https://ui-avatars.com/api/?name=${user.name}&background=000&color=fff&format=svg`} />
            <h1>{user.name}</h1>
          </div>
          <IonButton expand="block" onClick={() => clickLogout()}>Logout</IonButton>
        </div>
        ) : '' }
      </IonContent>
    </IonPage>
  );
};

export default Profile;
