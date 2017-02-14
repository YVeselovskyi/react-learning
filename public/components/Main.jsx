import React from 'react';
import Nav from 'Nav';


class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
