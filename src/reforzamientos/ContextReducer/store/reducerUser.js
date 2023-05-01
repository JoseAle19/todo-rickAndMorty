import { updatLastName, updateName, updateAge } from "./ActionTypes";
export const reducerUser = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case updateName:
        //return es casi igual que el break 
      return { ...state, name: payload };
    case updatLastName:
      return { ...state, lastName: payload };
    default:
      return state;
  }
};
