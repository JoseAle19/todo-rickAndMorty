import { updateName, updatLastName, updateAge } from "./ActionTypes";

export const updateNameAction = (name) => ({ type: updateName, payload: name });
export const updateLastNameAction = (lastName) => ({
  type: updatLastName,
  payload: lastName
});
export const updateAgeAction = (name) => ({ type: updateAge, payload: age });
