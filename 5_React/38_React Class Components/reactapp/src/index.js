import React from 'react';
import ReactDOM from 'react-dom/client';

// class components

// class Component {
//   constructor(){

//   }
// }

// class Child extends React.Component {
//   constructor(props){
//     super(props){

//     }

//   }
// }

// functional componenet
// const Header = () => {
//   return (
//     <header>
//       <div>
//         <h1>React Componenet</h1>
//       </div>
//     </header>
//   )
// }

// class componenet

// class Header extends React.Component {
//   constructor(props) {
//     super(props)
//     // code that need to be executed before rendering
//   }


//   render() {
//     console.log(this.props.data);
//     return (
//       <header>
//         <div>
//           <h1>{ this.props.data.welcome }</h1>
//           <h2>{ this.props.data.title }</h2>
//           <h3>
//             { this.props.data.student.firstname } {this.props.data.student.lastname}
//           </h3>
//           <small>{this.props.data.date}</small>
//         </div>
//       </header>
//     )
//   }
// }

// destructuring


class Header extends React.Component {
  constructor(props) {
    super(props)
    // code that need to be executed before rendering
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
        </div>
      </header>
    )
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
          <p>Copyright 2022</p>
        </div>
      </footer>
    )
  }
}



class App extends React.Component {
  constructor(props) {
    super(props)
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
    return (
      <div>
        <Header data={data} />
        <Main />
        <Footer />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
