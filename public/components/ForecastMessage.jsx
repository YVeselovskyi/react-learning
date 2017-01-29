import React from 'react';

class ForecastMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>{this.props.city}</h2>
                {this.props.weatherData.map( (e,i) => {
                  return(
                    <p key={i}>{e.date}</p>
                  )
                })}
            </div>
        );
    }
}

export default ForecastMessage;
