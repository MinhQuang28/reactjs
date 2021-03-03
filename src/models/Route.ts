import { ComponentType, ReactElement, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router';

export default interface Route {
  exact: boolean;
  path: string;
  component?: ComponentType;
  render?: (props: RouteComponentProps<any>) => ReactElement;
  name: string;
  icon?: ReactNode;
  hideInNav?: boolean;
  subRoutes?: Omit<Route, 'subRoutes'>[];
  firstRoute?: boolean;
}
