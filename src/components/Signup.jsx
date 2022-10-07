import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Navbar from './Navbar';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    dob: null,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <>
      <Navbar />
      <div>
        <form
          className="w-[70%] p-5 flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl mb-8">Student Signup</h3>
          <TextField
            id="outlined-name"
            label="Full Name"
            value={form.fullName}
            onChange={handleChange}
            name="fullName"
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

          <button
            className="w-[130px] rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
            type="submit"
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">Submit</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
