import React from 'react';

function Report(props) {
    const { name, value, startDate, endDate } = props;

    return (
    <div>
        {
            name && !isNaN(value) && startDate && endDate ? 
            <header>
                <h1>Report</h1>
                
                <div className="tab-flex form">
                    <div className="input-container">
                        <div><h3>Name: {name}</h3></div>
                    </div>
                    <div className="input-container">
                    <div className="cirlce-container">
                        <div className={`c100 p${Math.round(value)} big`}>
                            <span>{value}</span>
                            <div className="slice">
                                <div className="bar" style={{ transform: `rotate(${value*3.6}deg)`}}></div>
                                <div className="fill"></div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="input-container">
                        <div><h3>Start date: {startDate}</h3></div>
                    </div>
                    <div className="input-container">
                        <div><h3>End date: {endDate}</h3></div>
                    </div>
                </div>
                
                <div>
                </div>
                
                
            </header> : <h1>Please Submit Plan</h1>
        }
    </div>
  );
}

export default Report;
