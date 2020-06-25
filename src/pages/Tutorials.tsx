import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol } from '@ionic/react';
import './Tutorials.css';
import { RouteComponentProps } from 'react-router';
import Header from '../components/Header';
import Card from '../components/Card';

const Tutorials: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const tutorials = [
    {id: 'ionic-official-documentation', name: 'Official Ionic Documentation', url: 'https://angular.io/assets/images/logos/angular/angular.png', image: 'https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png', up: 320, down: 23, comments: 53, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },
    {id: 'ionic-official-documentation', name: 'Official Ionic Documentation', url: 'https://angular.io/assets/images/logos/angular/angular.png', image: 'https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png', up: 320, down: 23, comments: 53, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },
    {id: 'ionic-official-documentation', name: 'Official Ionic Documentation', url: 'https://angular.io/assets/images/logos/angular/angular.png', image: 'https://www.digital55.com/wp-content/uploads/2019/07/Ionic-caracteri%CC%81sticas-novedades-y-proyectos-1.png', up: 320, down: 23, comments: 53, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  },
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
            return <div key={tutorial.id}>
              <Card tutorial={tutorial} goToDetail={() => goToDetail(tutorial)}></Card>
            </div>
          })
        }
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tutorials;
