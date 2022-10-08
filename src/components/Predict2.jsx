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

const Predict2 = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-white flex flex-col gap-5 p-7">
        <Navbar />
        <h1 className="text-3xl mx-auto">Predict</h1>
        <form className="flex flex-col gap-5 w-[70%] mx-auto">
          <InputLabel id="detective">
            How strongly are you aware about the environment around you?
          </InputLabel>
          <Slider
            aria-label="detective"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="self-defense">
            How much do you rate your end to end combat skills? Rate it on the
            basis of any physical training you might have done.
          </InputLabel>
          <Slider
            aria-label="self-defense"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="physical-strength">
            How much do you rate your fitness?
          </InputLabel>
          <Slider
            aria-label="physical-strength"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="strategic-planning">
            How much do you plan before doing a task?
          </InputLabel>
          <Slider
            aria-label="strategic-planning"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="patroit">
            How likely are you to work in India? (10 being extremely likely and
            0 being not at all)
          </InputLabel>
          <Slider
            aria-label="patroit"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="courage">
            How likely are you to take accountable risks in a difficult
            situation?
          </InputLabel>
          <Slider
            aria-label="courage"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="leadership">
            How good are you at leading and representing others?
          </InputLabel>
          <Slider
            aria-label="leadership"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="interpersonal">
            How good are you at communicating & building relations in a
            professional environment?
          </InputLabel>
          <Slider
            aria-label="interpersonal"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="professionalism">
            How will you rate yourself on basis of basic professional manners,
            disciplines and punctuality?
          </InputLabel>
          <Slider
            aria-label="professionalism"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="emphathetic">
            How much are you able to understand other person's emotions?
          </InputLabel>
          <Slider
            aria-label="emphathetic"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="curiosity">
            How much do you like to explore different things?
          </InputLabel>
          <Slider
            aria-label="curiosity"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="attention-to-detail">
            How will you rate yourself for observing minute details while doing
            a task, reading a book etc?
          </InputLabel>
          <Slider
            aria-label="attention-to-detail"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="adaptability">
            How quickly can you get used into new environments?
          </InputLabel>
          <Slider
            aria-label="adaptability"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="problem-solving">
            Rate your problem solving skills.
          </InputLabel>
          <Slider
            aria-label="problem-solving"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="technical-skills">
            How familiar are you with new technologies and its trends?
          </InputLabel>
          <Slider
            aria-label="technical-skills"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="soft-skills">
            How will you rate your soft skills for professional environments?
          </InputLabel>
          <Slider
            aria-label="soft-skills"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="analytical-skills">
            Rate your analytical skills.
          </InputLabel>
          <Slider
            aria-label="analytical-skills"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="designing-skills">
            How much do you like working with colors, graphics and designs?
          </InputLabel>
          <Slider
            aria-label="designing-skills"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="team-work">
            How much do you like working in a team?
          </InputLabel>
          <Slider
            aria-label="team-work"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="organizational-skills">
            How much do you like goal setting and finishing deadlines?
          </InputLabel>
          <Slider
            aria-label="organizational-skills"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
          <InputLabel id="active-learning">
            How likely are you to continue learning different things in life?
          </InputLabel>
          <Slider
            aria-label="active-learning"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />

          <Link to="/result">
            <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none text-xl w-[200px] mx-auto">
              Predict
            </button>
          </Link>
        </form>
      </div>
    </>
  );
};

export default Predict2;
