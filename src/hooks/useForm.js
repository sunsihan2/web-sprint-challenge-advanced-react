// write your custom hook here to control your checkout form
import { useState, useEffect } from "react";

const useForm =(initialValues, setMessage) => {
    const [values, setValues] = useState("formValues",initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value 
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
       setShowSuccessMessage(true);
      };

      return [values, showSuccessMessage, handleChanges, handleSubmit]
}
export default useForm;