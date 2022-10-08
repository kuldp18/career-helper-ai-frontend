import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Navbar from './Navbar';
import { Link, Redirect } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signin, isAuthenticated, authenticate } from '../auth';

const Signin = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = form;

  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({ ...form, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setForm({ ...form, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setForm({
              ...form,
              email: '',
              password: '',
              error: '',
              loading: false,
              didRedirect: true,
            });
          });
        }
      })
      .catch((err) => {
        console.log('Signin failed!');
        console.error(err);
      });
  };

  const performRedirect = () => {
    if (isAuthenticated()) {
      return <Redirect to="/predict" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? '' : 'none' }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <div className="bg-white h-[80vh] w-[80%] mx-auto mb-12 flex justify-center items-center">
        <form
          className="w-[70%] p-5 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl mb-8">Student Login</h3>
          <Link to="/" className="text-sm">
            Go back <ArrowBackIcon />
          </Link>
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

          <button
            className="w-[130px] rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
            type="submit"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Sign in</span>
          </button>
        </form>
      </div>
      {performRedirect()}
      {loadingMessage()}
      {errorMessage()}
    </>
  );
};

export default Signin;
