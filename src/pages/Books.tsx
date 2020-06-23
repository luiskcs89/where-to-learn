import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Books.css';
import Header from '../components/Header';
import { RouteComponentProps } from 'react-router';

const Books: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {
  return (
    <IonPage>
      <Header name="Books" history={props.history} showSearch={true} showAdd={true} />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Books</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Books;
