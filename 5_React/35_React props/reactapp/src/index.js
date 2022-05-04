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

const welcome="Welcome to React Session"
const title="First Session"
const subtitle="JavaScript Module"
const firstname="Deepansh"
const lastname="Agrawal"
const date="May 5, 2022"

const App = () => {
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
