import { useCallback, useReducer } from "react";

/* takes a state & an action to return a new state */
const formReducer = (state, action) => {
  switch (action.type) {
    /* case 1 */
    case "input-change":
      /* update the input state & form validity state */
      let formIsValid = true;
      /** iterates through all  */
      for (const inputId in state.inputs) {
        /** skips the userId property if it does not exist */
        if(!state.inputs[inputId]) {
          continue;
        }
        /* checks if the input being received is the input is 
          getting updated in the current action */
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    /* case 2 */
    case "set-data":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };

    default:
      return state;
  }
};

export const useForm = (initialInputs, initialFormValidity) => {
  /** useReducer(<reducer>, <initialState>)
   * returns the current state and a dispatch method */
  const [formState, dispatch] = useReducer(
    formReducer, 
    {
      inputs: initialInputs,
      isValid: initialFormValidity,
    }
  );

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "input-change",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "set-data",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
