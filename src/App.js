import React, { useState } from 'react';
import './App.css';
import './Circle.css';
import Plan from './Components/PlanComponent';
import Report from './Components/ReportComponent';

function App() {
  const [tab, selectTab] = useState(0);
  const [formValues, setFormValues] = useState({
    name: '',
    value: 0,
    startDate: '',
    endDate: ''
  });
  
  return (
    <div className="App">
      <div className="tab-flex">
        <div className="tab" onClick={() => selectTab(0)}>Tab 1</div>
        <div className="tab" onClick={() => selectTab(1)}>Tab 2</div>
      </div>
      <div>
        {
          !tab ?
          <Plan formValues={formValues} setFormValues={setFormValues} selectTab={selectTab} />
          :
          <Report { ...formValues }/>
        }
      </div>
    </div>
  );
}

export default App;
