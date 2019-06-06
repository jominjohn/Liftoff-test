import React from 'react';

function Plan(props) {
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
            <h1>Tab 1</h1>
        </header>
        <form onSubmit={(e) => {
            e.preventDefault();
            if (name && !isNaN(value) && startDate && endDate) {
            selectTab(1);
            }
        }}>
            <input name="name" placeholder="Enter name" type="text" value={name} onChange={e => setFormValues({ ...formValues, name: e.target.value })} />
            <input name="value" placeholder="Enter Value" type="text" min={0} value={value} max={100} onChange={onChangeValue}/>
            <input name="startDate" placeholder="Enter Start Date" value={startDate} type="date" max={endDate} onChange={e => setFormValues({ ...formValues, startDate: e.target.value })}/>
            <input name="endDate" placeholder="Enter End Date" value={endDate} type="date" min={startDate} onChange={e => setFormValues({ ...formValues, endDate: e.target.value })}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Plan;
