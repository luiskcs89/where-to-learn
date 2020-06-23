import React from 'react';
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import './Home.css';
import { Route } from 'react-router';
import Tutorials from './Tutorials';
import Courses from './Courses';
import Groups from './Groups';
import Books from './Books';
import { laptopOutline, schoolOutline, chatbubblesOutline, libraryOutline } from 'ionicons/icons';
import Detail from './Detail';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home/:tab(tutorials)/:tech" component={Tutorials} />
            <Route path="/home/:tab(tutorials-detail)/:tech/:tutorial" component={Detail} />
            <Route path="/home/:tab(courses)/:tech" component={Courses} />
            <Route path="/home/:tab(groups)/:tech" component={Groups} />
            <Route path="/home/:tab(books)/:tech" component={Books} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tutorials" href="/home/tutorials/ionic-framework">
              <IonIcon icon={laptopOutline} />
              <IonLabel>Tutorials</IonLabel>
            </IonTabButton>
            <IonTabButton tab="courses" href="/home/courses/ionic-framework">
              <IonIcon icon={schoolOutline} />
              <IonLabel>Courses</IonLabel>
            </IonTabButton>
            <IonTabButton tab="groups" href="/home/groups/ionic-framework">
              <IonIcon icon={chatbubblesOutline} />
              <IonLabel>Groups</IonLabel>
            </IonTabButton>
            <IonTabButton tab="books" href="/home/books/ionic-framework">
              <IonIcon icon={libraryOutline} />
              <IonLabel>Books</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
    </IonPage>
  );
};

export default Home;
