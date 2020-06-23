import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import './Tutorials.css';
import { RouteComponentProps } from 'react-router';
import Header from '../components/Header';
import Card from '../components/Card';

const Tutorials: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const tutorials = [
    {id: 'ionic-official-documentation', name: 'Official Ionic Documentation', url: 'https://angular.io/assets/images/logos/angular/angular.png', image: 'https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png', up: 320, down: 23, comments: 53, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },
    {id: 'josh-morony', name: 'Josh Morony', url: 'https://www.joshmorony.com/topics/ionic-tutorials/', image: 'https://pbs.twimg.com/profile_images/940374790094782465/kAXm-k1E_400x400.jpg', up: 212, down: 11, comments: 36, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    {id: 'thinkster', name: 'Thinkster', url: 'https://thinkster.io/topics/ionic', image: 'https://pbs.twimg.com/profile_images/819400302864412676/6x2g2XtJ_400x400.jpg', up: 77, down: 55, comments: 15, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ]

  const goToDetail = (tutorial: any) => {
    props.history.push(`/home/tutorials-detail/ionic-framework/${tutorial.id}`);
  }

  return (
    <IonPage>
      <Header name="Tutorials" history={props.history} showSearch={true} showAdd={true} />

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tutorials</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRow>
        {
          tutorials.map((tutorial) => {
            return <IonCol size="12" key={tutorial.id}>
              <Card tutorial={tutorial} goToDetail={() => goToDetail(tutorial)}></Card>
            </IonCol>
          })
        }
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tutorials;
