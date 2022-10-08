import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signup } from '../auth';
import { Redirect } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    dob: '',
    error: '',
    success: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { fullname, email, password, dob, error, success } = form;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ ...form, error: false });
    signup({ fullname, email, password, dob })
      .then((data) => {
        if (!data.error) {
          setForm({
            ...form,
            fullname: '',
            email: '',
            password: '',
            dob: '',
            error: '',
            success: true,
          });
        } else {
          setForm({
            ...form,
            error: data.error,
            success: false,
          });
        }
      })
      .catch((err) => {
        console.log('error in signing up!');
        console.error(err);
      });

    console.log(form);
  };

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   setFormValues({ ...formValues, error: false });
  //   signup({ name, email, password })
  //     .then((data) => {
  //       if (data.error) {
  //         setFormValues({ ...formValues, error: data.error, success: false });
  //       } else {
  //         setFormValues({
  //           ...formValues,
  //           name: '',
  //           email: '',
  //           password: '',
  //           error: '',
  //           success: true,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log('error in signing up!');
  //       console.error(err);
  //     });
  // };
  return (
    <>
      <Navbar />
      <div className="bg-white h-[80vh] w-[80%] mx-auto mb-12">
        <form
          className="w-[70%] p-5 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl mb-8">Student Signup</h3>
          <Link to="/" className="text-sm">
            Go back <ArrowBackIcon />
          </Link>
          <TextField
            id="outlined-name"
            label="Full Name"
            value={form.fullname}
            onChange={handleChange}
            name="fullname"
            required
          />
          <TextField
            id="outlined-email"
            label="Email"
            value={form.email}
            type={'email'}
            onChange={handleChange}
            name="email"
            required
          />
          <TextField
            id="outlined-password"
            label="Password"
            value={form.password}
            type={'password'}
            onChange={handleChange}
            name="password"
            required
          />
          <TextField
            id="outlined-dob"
            value={form.dob}
            helperText="Date of Birth"
            onChange={handleChange}
            type="date"
            name="dob"
            required
          />
          <Link to="/signin">Already Registered? Sign in</Link>
          <button
            className="w-[130px] rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
            type="submit"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Sign up</span>
          </button>
        </form>
      </div>

      {success && <p className="text-white">Signup successful!</p>}
    </>
  );
};

export default Signup;
