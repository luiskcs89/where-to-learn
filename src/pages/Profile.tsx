import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonButtons, IonBackButton, IonButton, IonIcon } from '@ionic/react';
import './Courses.css';
import { RouteComponentProps } from 'react-router';
import { closeOutline } from 'ionicons/icons';

const Profile: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() =>
              {
                if(props.history.length > 0) {
                  props.history.goBack();
                } else {
                  props.history.push('/');
                }
              }
            }>
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
        aaa
      </IonContent>
    </IonPage>
  );
};

export default Profile;
