import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeElement : 'first', forecast: ''};
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e){
        e.preventDefault();
        let location = this.refs.location.value;
        this.setState({
          forecast: location
        });
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
                                    <input type="text" className="form-control" placeholder="Enter city..." ref="location" onChange={this.onSearch}/>
                                </div>
                                <Link className="btn btn-default" to={{ pathname: 'forecast', query: { city: this.state.forecast } }} >Get 5 days forecast!</Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;
