import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
// import { isAuthorization } from 'helpers/utils';
import { createBrowserHistory } from 'history';
import Test from './state/UsersList';
import List from './state/List';
import './assets/styles/index.css';
import AuthLayout from './layout/login.layout';


const App: FC = () => {
  const router = createBrowserHistory();

  // useEffect(() => {
  //   if (!isAuthorization()) {
  //     router.push('/auth/login');
  //   }
  // }, []);

  return (
    <Router history={router}>
      <Switch>
        {/* <Route component={List} path="/doctor" exact={false} />
        <Route component={List} path="/app" exact={false} /> */}
        <Route component={AuthLayout} path="/" exact={false} />
      </Switch>
    </Router>
  );
};

export default App;
