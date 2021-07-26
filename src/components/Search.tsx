import React, { FC, useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../store/actions/alertActions';
import { getCarbonintensity, setLoading } from '../store/actions/carbonintensityActions';

interface SearchProps {
  title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCode(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(code.trim() === '') {
      return dispatch(setAlert('Postcode is required!'));
    }

    dispatch(setLoading());
    dispatch(getCarbonintensity(code));
    setCode('');
  }

  return(
    <div className="hero is-light has-text-centered">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{title}</h1>
          <form className="py-5" onSubmit={submitHandler}>
            <input 
              type="text"
              className="input has-text-centered mb-2"
              placeholder="Enter Postcode eg: BA2"
              style={{maxWidth: 300}}
              value={code}
              onChange={changeHandler}
            />
            <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );  
}

export default Search;