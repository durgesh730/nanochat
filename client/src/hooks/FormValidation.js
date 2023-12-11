import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const UseFormValidation = () => {
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


export const useValidation = (inVal, user, navigate) => {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!user) {
      newErrors.user = 'Please Firstly Login';
    } else {
      if (!inVal.fname.trim()) {
        newErrors.fname = 'Enter Your Name';
      } else if (inVal.phonenumber.length < 10) {
        newErrors.phonenumber = 'Enter Your Correct Phone number';
      } else if (!inVal.AIQRank.trim()) {
        newErrors.AIQRank = 'Enter Your AIQ Rank';
      } else if (!inVal.category.trim()) {
        newErrors.category = 'Enter Your Category';
      }
    }
    return newErrors;
  };

  const HandleValidation = (setOpen) => {
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => {
        toast.error(error, {
          autoClose: 3000,
        });
      });
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    setErrors({});
  }, [inVal, user]);

  return { errors, HandleValidation };
};

