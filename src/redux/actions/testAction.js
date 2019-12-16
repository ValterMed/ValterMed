import types from './type';

export const updateDate = () => {
  return {
    type: types.UPDATE_DATE,
    payload: new Date()
  }
}