import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to="/"> Get Weather </Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
}

export default Nav;