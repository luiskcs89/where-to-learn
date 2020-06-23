import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Courses.css';
import Header from '../components/Header';
import { RouteComponentProps } from 'react-router';

const Courses: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <IonPage>
      <Header name="Courses" history={props.history} showSearch={true} showAdd={true} />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Courses</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
