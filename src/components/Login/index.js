import React, {Component} from 'react';

import Header from '../Header';
import Footer from '../Footer';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mesasge: this.props.auth.isAuthenticated ? 'Your already authenticated!!!' : 'Your are not logged in!!!',
        }
    }

    authMessage = () => {
        this.setState({
            mesasge: 'Your already authenticated!!!',
        });
    }

    signoutMeaasge = () => {
        this.setState({
            mesasge: 'Your are not logged in!!!',
        })
    }

    render() {

        return  (
            <div>
                <Header />
                <div>
                    <br/>
                    <br/>
                    <p>{this.state.mesasge}</p>
                    <button 
                        disabled={this.props.auth.isAuthenticated}
                        onClick={() => this.props.auth.authenticate(this.authMessage())}
                    >
                    Login
                    </button>
                    <button
                        disabled={!this.props.auth.isAuthenticated}
                        onClick={() => this.props.auth.signout(this.signoutMeaasge())}
                    >
                    Logout
                    </button>
                    <br/>
                    <br/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;