import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/him.jpeg';

const welcome = `Welcome to react sessions`;
const title = `First Session of React`;
const subtitle = `JavaScript Class`;

const student = {
  firstname : `Vishal`,
  lastname : `Rathore`
};

const date = `April 3, 2022`;

// hexadecimal color generator
//   #000000 - black
const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6 ; i++){
    let index = Math.floor(Math.random() * str.length)
    color += str[index] // color = color + str[index]
  }
  return '#' + color
}

const HexaColor = () => (
  <div style={{
    backgroundColor:`${hexaColor()}`
  }}>
    {hexaColor()}
  </div>
)





const headerStyle = {
  backgroundColor: 'cyan',
  fontFamily: 'Helvetic Neue',
  padding:25,
  lineHeight: 1.5
}


// React Componenet
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p>Member: {student.firstname} {student.lastname}</p>
      <small>{date}</small>
    </header>
  );
}

const UserCard = () => (
    <div>
      <img src={userImage} alt='Himanshu' />
      <h2>
        {student.firstname} {student.lastname}
      </h2>
    </div>
)

const tech = ['HTML', 'CSS', 'JavaScript'];
const techFormatted = tech.map( (tall) => <li>{tall}</li> )
//                                        <li>HTML </li>
//                                        <li>CSS</li>

// const fun = (tall) => <li>{tall}</li>

// fun("html")

const Main = () => (
  <main>
    <p>This is the first para for the development of react application</p>
    <ul>
    {techFormatted}
    </ul>
    <UserCard />
    <HexaColor />
  </main>
)

const Footer = () => (
  <footer>
    <p>Copyright 2022</p>
  </footer>
)

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
