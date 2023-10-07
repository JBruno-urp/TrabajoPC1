import React from 'react';
import AppDetails from '../components/AppDetails';

const AppDetailsScreen = ({ route }) => {
  const { app } = route.params;
  return <AppDetails app={app} />;
};

export default AppDetailsScreen;
