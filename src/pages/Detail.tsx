import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonRow, IonCol, IonButton, IonIcon, IonListHeader, IonList } from '@ionic/react';
import './Detail.css';
import { withRouter } from "react-router";
import { thumbsUpOutline, thumbsDownOutline, chatbubbleOutline } from 'ionicons/icons';

const tutorial = {id: 'ionic-official-documentation', name: 'Official Ionic Documentation', url: 'https://angular.io/assets/images/logos/angular/angular.png', image: 'https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png', up: 320, down: 23, comments: 53, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  };

const comments = {
  profile: {
    pic: '',
    name: ''
  },
  text: '',
  date: ''
}

const Detail: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Official Ionic Documentation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Official Ionic Documentation</IonTitle>
          </IonToolbar>
        </IonHeader>

        <img src={tutorial.image} />

        <IonRow>
          <IonCol>
            <IonButton fill="clear" size="small">
              <div>{tutorial.up}</div>
              <IonIcon slot="end" icon={thumbsUpOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton fill="clear" size="small">
              <div>{tutorial.down}</div>
              <IonIcon slot="end" icon={thumbsDownOutline}></IonIcon>
            </IonButton>
          </IonCol>
          <IonCol>
            <IonButton fill="clear" size="small">
              <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
              <div>{tutorial.comments} Comments</div>
            </IonButton>
          </IonCol>
        </IonRow>

        <IonButton fill="clear" expand="block">Go To Website</IonButton>

        <p className="description">{tutorial.description}</p>

        <IonList>
          <IonListHeader>Comments</IonListHeader>

        </IonList>
        
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Detail);
