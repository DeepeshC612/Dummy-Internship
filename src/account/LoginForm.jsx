import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Login Data:', values);
    navigate('/dashboard'); // Redirect after successful login
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full px-6 py-4 bg-[#4242ff] shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-2">
        {/* <img src={logo} alt="Logo" className="h-8 w-8" />*/}  
          <span className="text-xl font-semibold text-gray-800">Quizzical</span>
        </div>

      <a
          href="/signup"
          className="text-indigo-100 font-medium hover:underline transition"
        >
          Sign Up
        </a>  
      </nav>

      {/* Main Login Section */}
      <div className="flex w-screen h-[calc(100vh-64px)]">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
          <div className="w-full max-w-md p-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
              Login to Quizzical
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {() => (
                <Form className="grid gap-6">
                  <div>
                    <label className="block font-medium text-gray-700">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700">Password</label>
                    <Field
                      type="password"
                      name="password"
                      className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>

                  <Button type="submit" variant="contained" fullWidth>
                    Login
                  </Button>
                </Form>
              )}
            </Formik>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <a href="/signup" className="text-indigo-600 underline">
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Right: Image 
        <div className="hidden md:block w-1/2">
          <img
            src={Signup}
            alt="Login Visual"
            className="w-full h-full object-cover"
          />
        </div>
        */}
        
      </div>
    </>
  );
};

export default LoginForm;

