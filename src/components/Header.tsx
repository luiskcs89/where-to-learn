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
  const [state, setShowPopover] = useState({showPopover: false, event: undefined});
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
              <IonButton onClick={(e: any) => {
                e.persist();
                setShowPopover({showPopover: true, event: e})
              }}>
                <IonIcon slot="end" icon={addOutline} />
              </IonButton>
              ) : ''}
            </IonButtons>
          ) : ''}
        </IonToolbar>

        <IonPopover
          event={state.event}
          isOpen={state.showPopover}
          cssClass='my-custom-class'
          onDidDismiss={e => setShowPopover({showPopover: false, event: undefined})}
        >
          <IonList>
            <IonListHeader>Contribute</IonListHeader>
            <IonItem routerLink="/home">Add Topic</IonItem>
            <IonItem routerLink="/home">Add Resource</IonItem>
            <IonItem routerLink="/home">Edit This Topic</IonItem>
            <IonItem routerLink="/home">Report This Topic</IonItem>
            <IonItem button lines="none" detail={false} onClick={() => setShowPopover({showPopover: false, event: undefined})}>Close</IonItem>
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
