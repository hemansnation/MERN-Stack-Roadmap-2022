import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Register extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id] : e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
    
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    };

    render(){
        const { errors } = this.state;

        return (
            <div>
                <div>
                    <div>
                        <Link>
                            
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;