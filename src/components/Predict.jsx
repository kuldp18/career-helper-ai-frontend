import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';
import Navbar from './Navbar';

const Predict = () => {
  const [currentlyIn, setCurrentlyIn] = useState('');
  const [internship, setInternship] = useState('');
  return (
    <>
      <div className="min-h-[100vh] bg-white flex flex-col gap-5 p-7">
        <Navbar />
        <h1 className="text-3xl mx-auto">Predict your Career</h1>
        <form className="flex flex-col gap-5 w-[70%] mx-auto">
          <TextField
            id="outlined-age"
            label="Age"
            type={'number'}
            name="age"
            required
          />
          <FormControl>
            <InputLabel id="currently-in">Currently In?</InputLabel>
            <Select
              labelId="currently-in"
              id="currently-in"
              label="Currently In?"
              value={currentlyIn}
              onChange={(e) => setCurrentlyIn(e.target.value)}
              required
            >
              <MenuItem value={'10th'}>10th Passed</MenuItem>
              <MenuItem value={'12th'}>12th Passed</MenuItem>
              <MenuItem value={'ug'}>In College</MenuItem>
            </Select>
          </FormControl>
          {currentlyIn === 'ug' && (
            <>
              <InputLabel id="pursuing">Currently Pursuing?</InputLabel>
              <Select
                labelId="pursuing"
                id="pursuing"
                label="pursuing"
                required
              >
                <MenuItem value="BTech">BTech</MenuItem>
                <MenuItem value="MTech">MTech</MenuItem>
                <MenuItem value="BSc">BSc</MenuItem>
                <MenuItem value="BCom">BCom</MenuItem>
                <MenuItem value="MSc">MSc</MenuItem>
                <MenuItem value="MCom">MCom</MenuItem>
              </Select>
            </>
          )}

          {currentlyIn === '12th' && (
            <>
              <TextField
                id="outlined-12th"
                label="12th Percentile"
                type={'number'}
                name="12th"
                required
              />
            </>
          )}

          {currentlyIn === '10th' && (
            <>
              <TextField
                id="outlined-10th"
                label="10th Percentile"
                type={'number'}
                name="10th"
                required
              />
            </>
          )}

          {currentlyIn !== 'ug' && (
            <>
              <InputLabel id="favsub">Your Favorite Subject?</InputLabel>
              <Select labelId="favsub" id="favsub" label="favsub">
                <MenuItem value="Biology">Biology</MenuItem>
                <MenuItem value="Accounting">Accounting</MenuItem>
                <MenuItem value="Statistics">Statistics</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Social Studies">Social Studies</MenuItem>
                <MenuItem value="Psychology">Psychology</MenuItem>
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="Physics">Physics</MenuItem>
                <MenuItem value="Chemistry">Chemistry</MenuItem>
              </Select>
            </>
          )}

          {currentlyIn === 'ug' && (
            <>
              <InputLabel id="internship">
                Have you done any Internship/Certifications?
              </InputLabel>
              <Select
                labelId="internship"
                id="internship"
                label="internship"
                value={internship}
                onChange={(e) => setInternship(e.target.value)}
              >
                <MenuItem value="internship">Yes</MenuItem>
                <MenuItem value="no-internship">No</MenuItem>
              </Select>
            </>
          )}

          {internship === 'internship' && (
            <TextField
              id="outlined-age"
              label="Field of internship/certification?"
              type={'text'}
              name="internship"
              required
            />
          )}

          <InputLabel id="interest">Your Interests?</InputLabel>
          <Select labelId="interest" id="interest" label="interest" required>
            <MenuItem value="painting">Painting</MenuItem>
            <MenuItem value="reading">Reading</MenuItem>
            <MenuItem value="singing">Singing</MenuItem>
            <MenuItem value="dancing">Dancing</MenuItem>
            <MenuItem value="coding">Coding</MenuItem>
            <MenuItem value="graphic-designing">Graphic Designing</MenuItem>
            <MenuItem value="drawing">Drawing</MenuItem>
          </Select>
          <InputLabel id="skill">Your Skill?</InputLabel>
          <Select labelId="skill" id="skill" label="skill" required>
            <MenuItem value="painting">Painting</MenuItem>
            <MenuItem value="reading">Reading</MenuItem>
            <MenuItem value="singing">Singing</MenuItem>
            <MenuItem value="dancing">Dancing</MenuItem>
            <MenuItem value="coding">Coding</MenuItem>
            <MenuItem value="graphic-designing">Graphic Designing</MenuItem>
            <MenuItem value="drawing">Drawing</MenuItem>
          </Select>

          <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none text-xl w-[200px] mx-auto">
            Predict
          </button>
        </form>
      </div>
    </>
  );
};

export default Predict;
