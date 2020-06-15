import React, { useState } from 'react';
import './Header.css';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonPopover, IonList, IonListHeader, IonItem } from '@ionic/react';
import { personOutline, searchOutline, addOutline } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const Header: React.FC<ContainerProps> = ({ name }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="start" icon={personOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonButtons slot="primary">
            <IonButton href="/">
              <IonIcon slot="end" icon={searchOutline} />
            </IonButton>
            <IonButton onClick={() => setShowPopover(true)}>
              <IonIcon slot="end" icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>

          <IonPopover
          isOpen={showPopover}
          cssClass='my-custom-class'
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonList>
            <IonListHeader>Contribute</IonListHeader>
            <IonItem routerLink="/home">Add Topic</IonItem>
            <IonItem routerLink="/home">Add Tutorial</IonItem>
            <IonItem routerLink="/home">Add Course</IonItem>
            <IonItem routerLink="/home">Add Group</IonItem>
            <IonItem routerLink="/home">Add Book</IonItem>
            <IonItem button lines="none" detail={false} onClick={() => setShowPopover(false)}>Close</IonItem>
          </IonList>
        </IonPopover>

      </IonHeader>
  );
};

export default Header;
