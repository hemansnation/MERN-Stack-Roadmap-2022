import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/him.jpeg';

const UserCard = ({ user: {firstname, lastname, image} }) => {
  return (
    <div>
      <img src={image} alt={firstname} />
      <h2>
        {firstname}
        {lastname}
      </h2>
    </div>
  )
}

const Button = ({text, onClick, style}) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

const buttonStyle = {
  backgroundColor: 'blue',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

class Header extends React.Component {
  greetPeople = () => {
    alert("Welcome to the alert of geet Method of Header")
  }

  render() {
    console.log(this.props.data);

    const {
      welcome,
      title,
      subtitle,
      student: {firstname, lastname},
      date,
    } = this.props.data


    return (
      <header>
        <div>
          <h1>{ welcome }</h1>
          <h2>{ title }</h2>
          <h3>{subtitle}</h3>
          <h3>
            { firstname } {lastname}
          </h3>
          <small>{date}</small>
          <br />
          {' '}
          <button onClick={this.greetPeople} >Greet</button>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { techs } = this.props
    const techsFormatted = techs.map((t) => <li key={t}>{t}</li>)
    
    return techsFormatted
  }
}



class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <div>
          <h2>Learning React class</h2>
          <p>Class Componenet</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
          <UserCard user={this.props.user} />
          <Button 
            text='Greet People'
            onClick={this.props.greetPeople}
            style={buttonStyle}
          />
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}
// const date = new Date()


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  greetPeople = () => {
    alert('Greetings from App')
  }

  render(){
    const data = {
      welcome: "Hello welcome to components",
      title: "React Class",
      subtitle: "this is react session",
      student: {
        firstname: "Rohit",
        lastname: "Sharma"
      },
      date: 'May 11, 2022',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    const user = { ...data.student, userImage }

    return (
      <div>
        <Header data={data} />
        <Main 
          user={user}
          techs={techs}
          greetPeople={this.greetPeople} 
        />

        <Footer date={new Date()} />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
