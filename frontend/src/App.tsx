import React from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Theme from './themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import Loginpage from './pages/LoginPage';
import SendMoney from './pages/SendMoneyPage';
import { Provider } from 'react-redux';
import  {store, persistor } from './state/store';
import AccountSetup from './pages/AccountSetupPage';
import Business from './pages/BusinessPage';
import { PersistGate } from 'redux-persist/integration/react';
import SignUppage from './pages/SignupPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Provider store={store} ><Loginpage/></Provider>}/>
      <Route path='/' element={<Provider store={store} ><SignUppage/></Provider>}/>
      <Route path='/home' element={<Provider store={store} ><HomePage/></Provider>}/>
      <Route path='/sendMoney' element={<Provider store={store}><PersistGate loading={null} persistor={persistor}><SendMoney/></PersistGate></Provider>}/>
      <Route path='/account-setup' element={<Provider store={store} ><PersistGate loading={null} persistor={persistor}><AccountSetup/></PersistGate></Provider>}/>
      <Route path='/business' element={<Provider store={store} ><PersistGate loading={null} persistor={persistor}><Business/></PersistGate></Provider>}/>
      
      </Routes>

      </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
