import React, {Component} from 'react';

//import { Router } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';

class TopNav extends Component {

    onClick = () => this.props.history.push({ pathname: '/about' })

    render() {
        return (
            <nav>
                <Link to="/" >Home</Link>
                <Link to={{pathname: '/about', query: { param: '123' } }} >About</Link>
                <Link to="/dashboard">Lichny kabinet</Link>
                <Link to="/login">Login</Link>
            </nav>
        );
    }
}

export default withRouter(TopNav);