import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This is a weather application, which is built with React framework</p>
                <p>Here are some tools I used</p>
                <ul>
                  <li><a href="https://facebook.github.io/react" target="_blank">React JS</a></li>
                  <li><a href="https://openweathermap.org" target="_blank">Open Weather Map</a></li>
                  <li><a href="https://nodejs.org" target="_blank">Node JS</a></li>
                </ul>

            </div>
        );
    }
}

export default About;
