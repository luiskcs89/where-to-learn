import React, { useState } from 'react';
import './Header.css';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonPopover, IonList, IonListHeader, IonItem, IonModal } from '@ionic/react';
import { personOutline, searchOutline, addOutline } from 'ionicons/icons';
import Login from './Login';
import Register from './Register';
import { useSelector } from 'react-redux';

interface ContainerProps {
  name: string;
  history: any;
  showSearch: boolean;
  showAdd: boolean;
}

const Header: React.FC<ContainerProps> = ({ name, history, showSearch, showAdd }) => {
  const [showPopover, setShowPopover] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const user = useSelector((state: any) => state.userData);

  const goToProfile = () => {
    if(user) {
      history.push('/profile');
    } else {
      setShowLoginModal(true)
    }
  }

  return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton onClick={() => goToProfile()}>
              <IonIcon slot="start" icon={personOutline} />
            </IonButton>
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          { (showSearch && showAdd) ? (
            <IonButtons slot="primary">
              { (showSearch) ? (
              <IonButton routerLink="/">
                <IonIcon slot="end" icon={searchOutline} />
              </IonButton>
              ) : ''}
              { (showAdd) ? (
              <IonButton onClick={() => setShowPopover(true)}>
                <IonIcon slot="end" icon={addOutline} />
              </IonButton>
              ) : ''}
            </IonButtons>
          ) : ''}
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
            <IonItem routerLink="/home">Edit</IonItem>
            <IonItem routerLink="/home">Report</IonItem>
            <IonItem button lines="none" detail={false} onClick={() => setShowPopover(false)}>Close</IonItem>
          </IonList>
        </IonPopover>
        <IonModal isOpen={showLoginModal}>
          <Login closeModal={() => setShowLoginModal(false)} goToRegister={
            () => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }
          }></Login>
        </IonModal>
        <IonModal isOpen={showRegisterModal}>
          <Register closeModal={() => setShowRegisterModal(false)}></Register>
        </IonModal>
      </IonHeader>
  );
};

export default Header;
