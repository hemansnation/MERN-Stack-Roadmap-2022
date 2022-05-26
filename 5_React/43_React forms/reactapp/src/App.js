import { Component } from 'react';

class App extends Component{
    
    state = {
        firstName: '',
        lastName: '',
        country: '',
        title: '',
    }

    handleChange = (e) => {
        // const value = e.target.value

        // this.setState({
        //     firstName: value
        // })
        const { name, value } = e.target

        this.setState({
            [name]: value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()

        console.log(this.state);
    }
    
    render() {
        const { firstName, lastName, country, title } = this.state

        return (
            <div>
                {/* <label htmlFor='firstName' >First Name: </label>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.handleChange}
                />

                <h1>{this.state.firstName}</h1> */}

                <div>
                    <h3>This is a Form</h3>

                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                                type='text'
                                name='firstName'
                                placeholder='First Name'
                                value={firstName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input 
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                value={lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input 
                                type='text'
                                name='country'
                                placeholder='Country'
                                value={country}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <input 
                                type='text'
                                name='title'
                                placeholder='Title'
                                value={title}
                                onChange={this.handleChange}
                            />
                        </div>

                        <button className='btn btn-success' onClick={this.handleSubmit}>
                            Submit
                        </button>
                        
                    </form>
                </div>

            </div>
        )
    }
}

export default App