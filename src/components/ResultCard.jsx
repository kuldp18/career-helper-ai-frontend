import React from 'react';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const ResultCard = ({ college, course, location }) => {
  return (
    <div className="card flex w-[900px] justify-between bg-[#25283d] text-white p-5 rounded-xl m-5">
      <div className="left flex flex-col">
        <p>{college}</p>
        <p>{course}</p>
        <p>
          <LocationCityIcon /> {location}
        </p>
      </div>
      <div className="right flex justify-center items-center">
        <button>View More</button>
      </div>
    </div>
  );
};

export default ResultCard;
