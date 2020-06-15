import React from 'react';
import './Card.css';
import { IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonRow, IonCol } from '@ionic/react';
import { thumbsUpOutline, thumbsDownOutline, chatbubbleOutline } from 'ionicons/icons';

interface ContainerProps {
  tutorial: any;
  goToDetail: any;
}

const Card: React.FC<ContainerProps> = ({ tutorial, goToDetail }) => {

  return (
    <IonCard>

      <section onClick={goToDetail.bind(tutorial)}>
        <img src={tutorial.image} />

        <IonCardHeader>
          <IonCardTitle>{tutorial.name}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>{tutorial.description}</p>
        </IonCardContent>
      </section>

      <IonRow>
        <IonCol>
          <IonButton onClick={(e) => {e.preventDefault()}} fill="clear" size="small">
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

    </IonCard>
  );
};

export default Card;
