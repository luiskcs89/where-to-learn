import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Search from './pages/Search';
import Home from './pages/Home';
import { getCurrentUser } from './Firebase';
import Profile from './pages/Profile';
import { useDispatch } from 'react-redux';
import { setUserState } from './redux/actions';

const App: React.FC = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    getCurrentUser().then((user) => {
      if(user) {
        dispatch(setUserState(user));
      }
    })
  }, [])

  return (
  <IonApp>
    <IonReactRouter>
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
      <Route path="/home" component={Home} />
      <Route path="/" render={() => <Redirect to="/search" />} exact={true} />
    </IonReactRouter>
  </IonApp>);
};

export default App;