import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import signup from '../assets/signup.jpg'; // adjust path as needed
import logo from '../assets/Quizzical-Logo.png';
import NavbarSignup from './NavbarSignup';


const SignupForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const onSubmit = (values) => {
    console.log('Signup Data:', values);
    navigate('/login');
  };

return (
  <>
    {/*Navbar*/}
    <NavbarSignup/>
    {/* Main Signup Section */}
    <div className="flex w-screen h-[calc(100vh-64px)]"> {/* subtract navbar height */}
      {/* Left: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Welcome to Quizzical!</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {() => (
              <Form className="grid gap-6">
                <div>
                  <label className="block font-medium text-gray-700">Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>

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
                  <label className="block font-medium text-gray-700">Year</label>
                  <Field
                    type="year"
                    name="year"
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <ErrorMessage name="year" component="div" className="text-red-500 text-sm" />
                </div>

                <div>
                  <label className="block font-medium text-gray-700">Course</label>
                  <Field
                    type="Course"
                    name="Course"
                    className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <ErrorMessage name="Course" component="div" className="text-red-500 text-sm" />
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
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="hidden md:block w-1/2">
        <img
          src={signup}
          alt="Signup Visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </>
);

};

export default SignupForm;
