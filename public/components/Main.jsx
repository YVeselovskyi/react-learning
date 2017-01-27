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
                    <div className="col-md-6 col-md-offset-3 center">
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
