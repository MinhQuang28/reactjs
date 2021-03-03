import React, { FC, useCallback, useEffect } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
// import { isAuthorization } from 'helpers/utils';
import authRoutes from '../routes/auth.route';

const layoutPrefix = '';

const LoginLayout: FC = () => {
  const history = useHistory();
//   useEffect(() => {
//     if (isAuthorization()) {
//       history.push('/');
//     } else {
//       history.push('/auth/login');
//     }
//   }, []);
console.log(authRoutes);
  const getRoutes = useCallback((routes: typeof authRoutes| any) => {
    return routes.map((route: { subRoutes: any; exact: any; path: string; component: any; render: any; }, index: any) => {
      if (route.subRoutes) {
        return getRoutes(route.subRoutes);
      }
      return (
        <Route
          exact={route.exact}
          path={layoutPrefix + route.path}
          component={route.component}
          render={route.render}
          key={String(index)}
        />
      );
    });
  }, []);
  return (
    <div>
      <Switch>{getRoutes(authRoutes)}</Switch>
    </div>
  );
};

export default withRouter(LoginLayout);
