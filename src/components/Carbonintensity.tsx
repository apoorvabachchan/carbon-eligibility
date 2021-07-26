import React, { FC, useState, useEffect } from 'react';
import { CarbonintensityData } from '../store/types';

interface CarbonintensityProps {
  data: CarbonintensityData;
}

const Carbonintensity: FC<CarbonintensityProps> = ({ data }) => {
  const [average, setAverage] = useState (0);
  const forecast = data.data[0].data[0].intensity.forecast;
  const indicator =  Math.abs(1 - (forecast / (average * 2))).toFixed(2);

  const nationalAvg = async() => {
    try{
      const res = await fetch(`https://api.carbonintensity.org.uk/intensity`);
      const resData = await res.json();
      setAverage (resData.data[0].intensity.forecast);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    nationalAvg();
  }, [])

  return(
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered" style={{marginBottom: 50}}>Carbon Eligibility</h1>
        <div className="level" style={{alignItems: 'flex-start'}}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">National Average</p>
              <p className="title">{average}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Region</p>
              <div className="title">
                <p className="mb-2">{data.data[0].postcode} - {data.data[0].shortname}</p>
              </div>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Intensity Forecast</p>
              <p className="title">{forecast}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Intensity Index</p>
              <p className="title">{data.data[0].data[0].intensity.index}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Eligibility Indicator</p>
              <p className="title">{forecast >= average*2 ? 0 : indicator}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carbonintensity;