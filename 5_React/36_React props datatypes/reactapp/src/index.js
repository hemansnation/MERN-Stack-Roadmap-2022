import React from 'react';
import ReactDOM from 'react-dom/client';


const Header = (props) => {
  console.log(props);

  return (
    <header>
      <div className="header-wrapper">
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstname} {props.lastname}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
}



const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstname} {' '}
        {props.lastname}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}

const Age = (props) => {
  return (
    <div>
      This person is {props.age} years old.
    </div>
  )
}

const Weight = (props) => {
  return (
    <p>
      His weight is {props.weight} Kilo grams.
    </p>
  )
}

const Status = (props) => {
  return (
    <h1>
      {props.status}
    </h1>
  )
}

const Skills = (props) => {
  const skillList = props.skills.map( (s) => <li>{s}</li>)
  return (
    <ul>
      {skillList}
    </ul>
  )
}

const Head = (props) => {
  return (
    <div>
      <h1>{props.data.welcome}</h1>
      <h2> {props.data.title} </h2>
      <p>{props.data.subtitle}</p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick} >{props.text}</button>
  )
}


const welcome="Welcome to React Session"
const title="First Session"
const subtitle="JavaScript Module"
const firstname="Deepansh"
const lastname="Agrawal"
const date="May 5, 2022"



const App = () => {
  let year = 2022
  let birthYear = 1820
  const age = year - birthYear
  const weight = 75
  const status = age > 100 ? "true" : "false"

  const data = {
    welcome: "this is object component",
    title: "js componenet",
    subtitle: "data from object"
  }

  const helloIndore = () => {
    alert("Hi");
  }


  return (
    <div>
      <Header 
          welcome={welcome}
          title={title}
          subtitle={subtitle}
          firstname={firstname}
          lastname={lastname}
          date={date}
      />
      <User firstname="Abhishek" lastname="Yadav" country="India" />
      <Age age={age} />
      <Weight weight={weight * 2} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} /> 
      <Head data={data} />
      <Head data={{
        welcome: "Hello",
        title: "Bye",
        subtitle: "Go Home"
      }} />

      <Button text="Hello from button" onClick={helloIndore} />


    </div>
  )
}



// const App = () => {
//   return (
//     <div>
//       <Header 
//         welcome="Welcome to React Session"
//         title="First Session"
//         subtitle="JavaScript Module"
//         firstname="Deepansh"
//         lastname="Agrawal"
//         date="May 5, 2022"      
//       />
//       <User firstname="Abhishek" lastname="Yadav" country="India" />
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
