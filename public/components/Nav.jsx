import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeElement : 'first'};
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e){
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                              <span className="sr-only">Toggle navigation</span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                              <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">React Weather App</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li>
                                    <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
                                </li>
                                <li>
                                    <Link to="/about" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link>
                                </li>
                                <li>
                                  <Link to="/examples" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                                </li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                                <button type="submit" className="btn btn-default">Get Weather!</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
