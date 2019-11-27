import {
  GET_MENU_STATUS,
  GetMenuAction
} from "../../ActionFiles/CustomerActions";

export interface MenuState {
  isLoading?: boolean;
  error?: Error | null;
}

export const menuState: MenuState = {
  isLoading: false,
  error: null
};

export const Menu = (
  state: MenuState = menuState,
  action: GetMenuAction
): MenuState => {
  switch (action.type) {
    // Menu retrieval begin
    case GET_MENU_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    // Menu retrieval failed
    case GET_MENU_STATUS.SUCCESS:
      return {
        ...state,
        isLoading: false
      };

    // Menu retrieval failed
    case GET_MENU_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
