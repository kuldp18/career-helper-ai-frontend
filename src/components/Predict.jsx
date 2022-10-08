import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Slider,
} from '@mui/material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Predict = () => {
  const [data, setData] = useState({
    age: '',
    currentlyIn: '',
    pursuing: '',
    hsc: '',
    ssc: '',
    internship: '',
    history: 0,
    numericalReasoning: 0,
    reading: 0,
    geography: 0,
    flexibility: 0,
    teamBuilding: 0,
    customerService: 0,
    multiTasking: 0,
    decisionMaking: 0,
    personality: 0,
    humbleness: 0,
    oratory: 0,
    integrity: 0,
    negotiation: 0,
    memory: 0,
    criticalThinking: 0,
    dedication: 0,
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
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
            value={data.age}
            onChange={handleChange}
            required
          />
          <FormControl>
            <InputLabel id="currently-in">Currently In?</InputLabel>
            <Select
              labelId="currently-in"
              id="currently-in"
              name="currentlyIn"
              label="Currently In?"
              value={data.currentlyIn}
              onChange={handleChange}
              required
            >
              <MenuItem value={'10th'}>10th Passed</MenuItem>
              <MenuItem value={'12th'}>12th Passed</MenuItem>
              <MenuItem value={'ug'}>In College</MenuItem>
            </Select>
          </FormControl>
          {data.currentlyIn === 'ug' && (
            <>
              <InputLabel id="pursuing">Currently Pursuing?</InputLabel>
              <Select
                labelId="pursuing"
                id="pursuing"
                name="pursuing"
                label="pursuing"
                value={data.pursuing}
                onChange={handleChange}
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

          {data.currentlyIn === '12th' && (
            <>
              <TextField
                id="outlined-12th"
                label="12th Percentile"
                type={'number'}
                value={data.hsc}
                onChange={handleChange}
                name="hsc"
                required
              />
            </>
          )}

          {data.currentlyIn === '10th' && (
            <>
              <TextField
                id="outlined-10th"
                label="10th Percentile"
                onChange={handleChange}
                type={'number'}
                value={data.ssc}
                name="ssc"
                required
              />
            </>
          )}

          {/* {currentlyIn !== 'ug' && (
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
          )} */}
          {/* 
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
          )} */}

          {data.internship === 'internship' && (
            <TextField
              id="outlined-age"
              label="Field of internship/certification?"
              type={'text'}
              name="internship"
              onChange={handleChange}
              value={data.internship}
              required
            />
          )}

          {/* <InputLabel id="interest">Your Interests?</InputLabel>
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
          </Select> */}

          <InputLabel id="history">
            How much do you like to know history?
          </InputLabel>
          <Slider
            aria-label="history"
            value={data.history}
            valueLabelDisplay="auto"
            name="history"
            onChange={handleChange}
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="numerical-reasoning">
            How will you rate your aptitude and reasoning skills?
          </InputLabel>
          <Slider
            aria-label="numerical-reasoning"
            value={data.numericalReasoning}
            onChange={handleChange}
            name="numericalReasoning"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="reading">Rate your interest in reading.</InputLabel>
          <Slider
            aria-label="reading"
            name="reading"
            value={data.reading}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="geography">
            Rate your interest in learning about the earth and its features.
          </InputLabel>
          <Slider
            aria-label="geography"
            name="geography"
            value={data.geography}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="flexibility">
            How likely are you to adapt in new evironments?
          </InputLabel>
          <Slider
            aria-label="flexibility"
            name="flexibility"
            value={data.flexibility}
            onChange={handleChange}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="team-building">
            How much do you like to collaborate with other people?
          </InputLabel>
          <Slider
            aria-label="team-building"
            value={data.teamBuilding}
            onChange={handleChange}
            name="teamBuilding"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="customer-service">
            How will you rate your feedback and improvement skills?
          </InputLabel>
          <Slider
            aria-label="customer-service"
            value={data.customerService}
            onChange={handleChange}
            name="customerService"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="multitasking">
            How likely are you to work on multiple things at the same time?
          </InputLabel>
          <Slider
            aria-label="multitasking"
            value={data.multiTasking}
            onChange={handleChange}
            name="multiTasking"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="decision-making">
            How would you rate your decision making skills?
          </InputLabel>
          <Slider
            aria-label="decision-making"
            value={data.decisionMaking}
            onChange={handleChange}
            name="decisionMaking"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="personality">How much friendly are you?</InputLabel>
          <Slider
            aria-label="personality"
            value={data.personality}
            onChange={handleChange}
            name="personality"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="humbleness">
            With regarding humbleness, how much do you rate yourself?
          </InputLabel>
          <Slider
            aria-label="humbleness"
            value={data.humbleness}
            onChange={handleChange}
            name="humbleness"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="oratory">
            How effectively can you express your idea in front of people of
            higher authorities?
          </InputLabel>
          <Slider
            aria-label="oratory"
            value={data.oratory}
            onChange={handleChange}
            name="oratory"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="integrity">
            How much honest are you towards your work?
          </InputLabel>
          <Slider
            aria-label="integrity"
            value={data.integrity}
            onChange={handleChange}
            name="integrity"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="negotiation">
            How will you rate your debate / negotiation skills?
          </InputLabel>
          <Slider
            aria-label="negotiation"
            value={data.negotiation}
            onChange={handleChange}
            name="negotiation"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="memory">Rate your memorising skills.</InputLabel>
          <Slider
            aria-label="memory"
            value={data.memory}
            onChange={handleChange}
            name="memory"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="critical-thinking">
            Rate your critical thinking abilities.
          </InputLabel>
          <Slider
            aria-label="critical-thinking"
            value={data.criticalThinking}
            onChange={handleChange}
            name="criticalThinking"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="dedication">
            How much likely are you to dedicate yourself towards a particular
            task?
          </InputLabel>
          <Slider
            aria-label="dedication"
            value={data.dedication}
            onChange={handleChange}
            name="dedication"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />

          <Link to="/predict2">
            <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none text-xl w-[200px] mx-auto">
              Next
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Predict;
