// write your custom hook here to control your checkout form
import { useState, useEffect } from "react";

const useForm =(initialValues) => {
    const [values, setValues] = useState("formValues",initialValues);

    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setValues(true);
      };

      return [values, handleChanges, handleSubmit]
}
export default useForm