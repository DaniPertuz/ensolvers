import { ChangeEvent, useState } from 'react';

export const useForm = <T extends Record<string, string>>(initState: T) => {

  const [state, setState] = useState(initState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const setFormValue = (form: T) => {
    setState(form);
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue
  };
};