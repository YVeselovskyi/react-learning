import React from 'react';
import {Link} from 'react-router';

class Examples extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Examples lols</h1>
                <p>Here are a few examples</p>
                <ol>
                  <li>
                    <Link to='/?location=Kyiv'>Kyiv, UA</Link>
                  </li>
                  <li>
                    <Link to='/?location=Warsaw'>Warsaw, PL</Link>
                  </li>
                </ol>
            </div>
        );
    }
}

export default Examples;
