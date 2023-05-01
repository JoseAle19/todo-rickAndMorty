import { useState } from "react";
export const useForm = (initialState) => {
  const [description, setDescription] = useState(initialState);
  
  const [state, setFormState] = useState(initialState);
  
  const handleInputChange = ({ target }) => {
    setDescription({
      ...description,
      [target.name]: target.value,
    });
  };

  const handleInputChangelogin = ({target}) =>{
    
    const {name, value } = target;
    setFormState({
      ...state,
      [name]: value
    })
  }
  return {
    description,
    handleInputChange,
    state,
    handleInputChangelogin
  };
};
