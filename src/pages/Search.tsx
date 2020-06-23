import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonLabel, IonThumbnail, IonIcon, IonButtons, IonBackButton } from '@ionic/react';
import './Search.css';
import { chevronForward } from 'ionicons/icons';
import Header from '../components/Header';
import { RouteComponentProps } from 'react-router';

const Search: React.FC<RouteComponentProps> = (props: RouteComponentProps) => {

  const techs = [
    {id: 'angular', name: 'Angular', image: 'https://angular.io/assets/images/logos/angular/angular.png'},
    {id: 'ionic-framework', name: 'Ionic Framework', image: 'https://hackr.io/tutorials/ionic/logo-ionic.svg?ver=1587978084'},
    {id: 'react', name: 'React', image: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'}
  ]
  const [searchText, setSearchText] = useState('');
  
  return (
    <IonPage>
      <Header name="Where to Learn?" history={props.history} showSearch={false} showAdd={false} />
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Where to learn?</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

        <IonList>
          {
            techs.map((tech) => {
              return <IonItem routerLink={`/home/tutorials/${tech.id}`} key={tech.id} detail={false}>
                <IonThumbnail slot="start">
                  <img src={tech.image} />
                </IonThumbnail>
                <IonLabel>
                  {tech.name}
                </IonLabel>
                <IonIcon icon={chevronForward} size="large" slot="end" />
              </IonItem>
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
