import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Snackbar from './components/Snackbar/Snackbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer.jsx';
import './App.sass';


const Index = lazy(() => import('./pages/Index/Index'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const News = lazy(() => import('./pages/News/News'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));

export default function App() {
  return (
    <HashRouter>
      <Snackbar />
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/news" component={News}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
      </Suspense>
      <Footer />
    </HashRouter>
  );
}