import { useState } from 'react';
import { toast } from 'react-toastify';

const UseFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateSignUpForm = (formData) => {
    const { fname, email, password, cpassword } = formData;
    const newErrors = {};

    if (!fname.trim()) {
      newErrors.fname = 'Enter Your Name';
    } else if (!email.trim()) {
      newErrors.email = 'Enter Your Email Id';
    } else if (!email.includes('@')) {
      newErrors.email = 'Please Enter valid email';
    } else if (!password.trim()) {
      newErrors.password = 'Enter Your Password';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be 6 characters';
    } else if (!cpassword.trim()) {
      newErrors.cpassword = 'Please Enter Your Confirm password';
    } else if (cpassword.length < 6) {
      newErrors.cpassword = 'Password must be 6 characters';
    } else if (password !== cpassword) {
      newErrors.cpassword = 'Password does not match';
    }

    // Display error messages immediately without relying on state
    Object.values(newErrors).forEach((errorMsg) => {
      if (errorMsg) {
        toast.error(errorMsg, {
          autoClose: 1500,
        });
      }
    });

    // Set the errors in state
    setErrors(newErrors);

    // Return true if no errors exist, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleValidation = (formData) => {
    const isValid = validateSignUpForm(formData);
    return isValid;
  };

  return { errors, handleValidation };
};

export default UseFormValidation;
