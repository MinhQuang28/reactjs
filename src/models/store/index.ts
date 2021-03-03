
import { UserReducerState } from './user.model';

interface State {
  user: UserReducerState;
  
}

type StoreState = Readonly<State>;

export default StoreState;
