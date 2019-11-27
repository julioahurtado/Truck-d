import { LOGIN_STATUS, LoginAction } from "../../ActionFiles/VendorActions";

export interface LoginState {
  isLoading: boolean;
  error?: Error | null;
}

let initState: LoginState = {
  isLoading: false,
  error: null
};

export const Login = (
  state: LoginState = initState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    // Signals start of vendor login
    case LOGIN_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    // Signals successfull vendor login
    case LOGIN_STATUS.SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    // Signals failed vendor login
    case LOGIN_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
