import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension'
import RootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
    reduxFirestore,
    getFirestore
} from 'redux-firestore'
import {
    reactReduxFirebase,
    getFirebase
} from 'react-redux-firebase'
import firebase from '../fireebase/firebaseConfig'


const rrfConfig = {
    userProfile: 'users',
    attachAuthIsReady: true,
    useFirestoreForProfile: true
  };
  
  export const configureStore = () => {
    const middlewares = [logger,thunk.withExtraArgument({ getFirebase, getFirestore })];
    const middlewareEnhancer = applyMiddleware(...middlewares);
  
    const storeEnhancers = [middlewareEnhancer];
  
    const composedEnhancer = composeWithDevTools(
      ...storeEnhancers,
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase)
    );
    const store = createStore(RootReducer , composedEnhancer);
    return store;
  }
  

