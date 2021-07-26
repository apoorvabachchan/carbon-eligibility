import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './components/Search';
import Alert from './components/Alert';
import Carbonintensity from './components/Carbonintensity';
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/carbonintensityActions';

const App: FC = () => {
  const dispatch = useDispatch();
  const carbonintensityData = useSelector((state: RootState) => state.carbonintensity.data);
  const loading = useSelector((state: RootState) => state.carbonintensity.loading);
  const error = useSelector((state: RootState) => state.carbonintensity.error);
  const alertMsg = useSelector((state: RootState) => state.alert.message);

  return (
    <div className="has-text-centered">
      <Search title="Enter Postcode and press search button" />
      {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : carbonintensityData && <Carbonintensity data={carbonintensityData} />}

      {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alert message={error} onClose={() => dispatch(setError())} />}
    </div>
  );
}

export default App;
