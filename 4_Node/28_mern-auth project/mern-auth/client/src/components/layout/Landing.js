import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
    render(){
        return (
            <div>
                <div>
                    <div>
                        <h4>Authentication System using MERN</h4> 
                        <p>
                            Full Stack authentication application using MERN Stack
                        </p>
                        <br />
                        <div className='col s6'>
                            <Link 
                            to="/register"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >Register
                            </Link>
                        </div>
                        <div>
                        <Link 
                            to="/login"
                            style={{
                                width: "140px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px"
                            }}
                            className="btn btn-large btn-flat waves-effect white black-text"
                            >Login
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;