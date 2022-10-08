import React from 'react';
import image from '../img/result.svg';
import ResultCard from './ResultCard';
const Result = () => {
  return (
    <div className="min-h-[100vh] bg-white p-5 flex flex-col justify-center items-center gap-5">
      <h1 className="text-4xl">Predictions: </h1>
      <div className="top">
        <img src={image} alt="result" />
      </div>
      <div className="bottom">
        <ResultCard
          college="St. Xavier's College"
          course="BSc Computer Science"
          location="Ahmedabad"
        />
        <ResultCard
          college="IAR Gandhinagar"
          course="BCA"
          location="Gandhinagar"
        />
        <ResultCard
          college="DAIICT, Gandhinagar"
          course="BTech ICT"
          location="Gandhinagar"
        />
      </div>
    </div>
  );
};

export default Result;
