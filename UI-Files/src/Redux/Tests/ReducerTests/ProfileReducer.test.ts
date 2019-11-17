import { Profile, initState, ProfileState } from '../../ReducerFiles/VendorReducers/ProfileReducer';
import { updateVendor, addMenuItemSuccess, deleteMenuItemSuccess, editMenuItemSuccess } from '../../ActionFiles/VendorActions';

describe('profile reducer', () => {
  it('should return the initial state', () => {
    expect(Profile(undefined, {})).toEqual(initState)
  })
})