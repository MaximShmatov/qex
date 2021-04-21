import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import store from './redux/store';
import './index.sass';

window.credentials = {
  login: 'admin',
  password: 'admin',
};

const Index = lazy(() => import('./pages/Index/Index'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const News = lazy(() => import('./pages/News/News'));
const SignIn = lazy(() => import('./pages/SignIn/SignIn'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/news" component={News}/>
            <Route path="/signin" component={SignIn}/>
          </Switch>
          <Footer/>
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);