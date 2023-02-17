import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';

import routeList from './RouteList';

type Props = {
  children?: React.ReactNode;
};

const Routes: React.FC<RouteProps & Props> = ({ children }) => {
  const routeMap = routeList.map((route, index) => {
    return <Route key={index} path={route.path} exact={route.exact} component={route.component} />;
  });

  return (
    <Router>
      <Switch>{children || routeMap}</Switch>
    </Router>
  );
}

export default Routes;
