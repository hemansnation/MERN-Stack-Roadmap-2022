import { Component } from 'react';

class App extends Component{

    state = {
        firstname: '',
        message: '',
        key: ''
    }

    greetPeople = () => {
        alert("This is alert from greet people");
    }

    handleClick = (e) => {
        // console.log(e);
        this.setState({
            message: "state change by handleClick"
        })
    }

    handleMouseMove = (e) => {
        this.setState({
            message: "mouse moved",
        })
    }

    handleCopy = (e) => {
        this.setState({
            message: "Text Copied!!"
        })
    }

    handleKeyPress = (e) => {
        this.setState({
            message: "Key Pressed"
        })
    }

    handleChange = (e) => {
        this.setState({
            firstname: e.target.value,
            message: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            message:'Form Submitted'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.greetPeople}>Click here</button>

                <button onClick={this.handleClick}>Click Event</button>

                <button onMouseMove={this.handleMouseMove}>Move Mouse</button>

                <p onCopy={this.handleCopy}>
                    check and copy this
                </p>

                <input type='text' onKeyPress={this.handleKeyPress} />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstname'>First Name: </label>
                        <input name='firstname' onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type='submit' value='SUBMIT' />
                    </div>
                </form>
            </div>
        )
    }
}

export default App