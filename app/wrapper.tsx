"use client";
import React from "react";
import { Amplify} from 'aws-amplify';
import awsconfig from './aws-exports';
import { Provider } from "react-redux";
import config from './amplifyconfiguration.json';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { generateClient } from 'aws-amplify/api';

Amplify.configure({ ...awsconfig, ssr: true });
function Wrapper({ children }: { children: React.ReactNode }) {
  // Amplify.configure(awsconfig);
  generateClient();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default Wrapper;
