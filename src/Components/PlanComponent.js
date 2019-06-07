import React, { useState } from 'react';

function Plan(props) {
    const [errMsg, throwError] = useState('');
    const {formValues, setFormValues, selectTab} = props;
    const { name, value, endDate, startDate } = formValues;

    const onChangeValue = (e) => {
        const targetValue = e.target.value
        if (!isNaN(targetValue) & Number(targetValue) >= 0 && Number(targetValue) <= 100) {
            setFormValues({ ...formValues, value: targetValue });
        }
    }
  return (
    <div>
        <header>
            <h1>Plan</h1>
            <span className="err">{ errMsg || '' }</span>
        </header>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (name && !isNaN(value) && startDate && endDate) {
                throwError('');
                selectTab(1);
            } else {
                throwError('*Please enter fields properly');
            }
        }}>
            <div className="tab-flex form">
                <div className="input-container">
                    <input className="form-input" name="name" placeholder="Enter name" type="text" value={name} onChange={e => setFormValues({ ...formValues, name: e.target.value })} />
                </div>
                <div className="input-container">
                    <input className="form-input" name="value" placeholder="Enter Value" type="text" min={0} value={value} max={100} onChange={onChangeValue}/>
                </div>
                <div className="input-container">
                    <input className="form-input" name="startDate" placeholder="Enter Start Date" value={startDate} type="date" min={formatDate()} max={endDate} onChange={e => setFormValues({ ...formValues, startDate: e.target.value })}/>
                </div>
                <div className="input-container">
                    <input className="form-input" name="endDate" placeholder="Enter End Date" value={endDate} type="date" min={startDate} onChange={e => setFormValues({ ...formValues, endDate: e.target.value })}/>
                </div>
                <div className="input-container">
                    <button className="form-input form-submit" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
  );
}

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export default Plan;
