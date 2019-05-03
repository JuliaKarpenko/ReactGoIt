import React from 'react';
// import Player from './refs/Player';
import './App.css';
import UserProfile from './components/refs(context)/userProfile/UserProfile';
import AuthContextProvider from './context/AuthContext';
import AppBar from './components/refs(context)/appBar/AppBar';

const App = () => (
    
 <AuthContextProvider>
    <AppBar/>
    <UserProfile />
 </AuthContextProvider> 
)

export default App;

