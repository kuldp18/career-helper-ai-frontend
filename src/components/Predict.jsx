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
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';

const Predict = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
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
    detective: 0,
    selfDefense: 0,
    physicalStrength: 0,
    strategicPlanning: 0,
    patriot: 0,
    courage: 0,
    leadership: 0,
    interpersonal: 0,
    professionalism: 0,
    emphathetic: 0,
    curiosity: 0,
    attentionToDetail: 0,
    adaptability: 0,
    problemSolving: 0,
    technicalSkills: 0,
    softSkills: 0,
    analyticalSkills: 0,
    designingSkills: 0,
    teamWork: 0,
    organizationalSkills: 0,
    activeLearning: 0,
  });

  const govtScore =
    data.history + data.numericalReasoning + data.reading + data.geography;

  const mgmtScore =
    data.flexibility +
    data.teamBuilding +
    data.leadership +
    data.negotiation +
    data.customerService +
    data.multiTasking +
    data.decisionMaking +
    data.personality +
    data.humbleness;

  const lawScore =
    data.oratory +
    data.integrity +
    data.negotiation +
    data.dedication +
    data.reading +
    data.memory +
    data.criticalThinking +
    data.attentionToDetail;

  const defScore =
    data.physicalStrength +
    data.leadership +
    data.dedication +
    data.detective +
    data.selfDefense +
    data.strategicPlanning +
    data.patriot +
    data.courage;

  const medScore =
    data.interpersonal +
    data.criticalThinking +
    data.attentionToDetail +
    data.professionalism +
    data.emphathetic +
    data.curiosity;

  const engScore =
    data.adaptability +
    data.problemSolving +
    data.technicalSkills +
    data.criticalThinking +
    data.softSkills +
    data.analyticalSkills +
    data.designingSkills +
    data.teamWork +
    data.organizationalSkills +
    data.activeLearning;

  const scores = {
    govtScore,
    mgmtScore,
    lawScore,
    defScore,
    medScore,
    engScore,
  };

  const GovernmentSector = (govtScore / 40) * 100;
  const Management = (mgmtScore / 90) * 100;
  const Law = (lawScore / 80) * 100;
  const Defence = (defScore / 80) * 100;
  const Medical = (medScore / 60) * 100;
  const Engineering = (engScore / 100) * 100;

  const percentages = {
    GovernmentSector,
    Management,
    Law,
    Defence,
    Medical,
    Engineering,
  };

  console.log(percentages);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openModal();
  };

  const pickHighest = (obj, num = 1) => {
    const requiredObj = {};
    if (num > Object.keys(obj).length) {
      return false;
    }
    Object.keys(obj)
      .sort((a, b) => obj[b] - obj[a])
      .forEach((key, ind) => {
        if (ind < num) {
          requiredObj[key] = obj[key];
        }
      });
    return requiredObj;
  };

  const topThree = pickHighest(percentages, 3);
  const keys = Object.keys(topThree);
  const values = Object.values(topThree);

  return (
    <>
      <div className="min-h-[100vh] bg-white flex flex-col gap-5 p-7">
        <Navbar />
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <ol>
            <li>1.{keys[0]}</li>
            <li>2.{keys[1]}</li>
            <li>3.{keys[2]}</li>
          </ol>

          <p onClick={closeModal} className="cursor-pointer">
            <CloseIcon />
          </p>
        </Modal>
        <h1 className="text-3xl mx-auto">Predict your Career</h1>
        <form
          className="flex flex-col gap-5 w-[70%] mx-auto"
          onSubmit={handleSubmit}
        >
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

          <InputLabel id="detective">
            How strongly are you aware about the environment around you?
          </InputLabel>
          <Slider
            aria-label="detective"
            value={data.detective}
            name="detective"
            valueLabelDisplay="auto"
            onChange={handleChange}
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
            value={data.selfDefense}
            onChange={handleChange}
            name="selfDefense"
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
            value={data.physicalStrength}
            name="physicalStrength"
            onChange={handleChange}
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
            value={data.strategicPlanning}
            name="strategicPlanning"
            onChange={handleChange}
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
            value={data.patriot}
            name="patriot"
            onChange={handleChange}
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
            value={data.courage}
            onChange={handleChange}
            name="courage"
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
            value={data.leadership}
            onChange={handleChange}
            name="leadership"
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
            value={data.interpersonal}
            onChange={handleChange}
            name="interpersonal"
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
            value={data.professionalism}
            onChange={handleChange}
            name="professionalism"
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
            value={data.emphathetic}
            onChange={handleChange}
            name="emphathetic"
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
            value={data.curiosity}
            onChange={handleChange}
            name="curiosity"
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
            value={data.attentionToDetail}
            onChange={handleChange}
            name="attentionToDetail"
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
            value={data.adaptability}
            onChange={handleChange}
            name="adaptability"
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
            value={data.problemSolving}
            onChange={handleChange}
            name="problemSolving"
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
            value={data.technicalSkills}
            onChange={handleChange}
            name="technicalSkills"
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
            value={data.softSkills}
            onChange={handleChange}
            name="softSkills"
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
            value={data.analyticalSkills}
            onChange={handleChange}
            name="analyticalSkills"
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
            value={data.designingSkills}
            onChange={handleChange}
            name="designingSkills"
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
            value={data.teamWork}
            onChange={handleChange}
            name="teamWork"
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
            value={data.organizationalSkills}
            onChange={handleChange}
            name="organizationalSkills"
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
            value={data.activeLearning}
            onChange={handleChange}
            name="activeLearning"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />

          {/* <Link to="/result"> */}
          <button class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none text-xl w-[200px] mx-auto">
            Predict
          </button>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
};

export default Predict;
