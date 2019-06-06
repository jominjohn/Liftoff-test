import React from 'react';

function Report(props) {
    const { name, value, startDate, endDate } = props;

    return (
    <div>
        {
            name && !isNaN(value) && startDate && endDate ? 
            <header>
                <h1>Tab 2</h1>
                <div><h3>Name: </h3>{name}</div>
                <div>
                    <div className={`c100 p${Math.round(value)} big`}>
                        <span>{value}</span>
                        <div className="slice">
                            <div className="bar" style={{ transform: `rotate(${value*3.6}deg)`}}></div>
                            <div className="fill"></div>
                        </div>
                    </div>
                </div>
                <div><h3>Start date: </h3>{startDate}</div>
                <div><h3>End date: </h3>{endDate}</div>
            </header> : <h1>Please Submit Plan</h1>
        }
    </div>
  );
}

export default Report;
