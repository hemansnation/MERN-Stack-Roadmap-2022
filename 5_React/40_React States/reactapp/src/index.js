import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
// import userImage from './images/him.jpeg';

// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   render() {
//     const count = this.state.count

//     return (
//       <div>
//         <h1>{ count }</h1>
//         <button 
//           onClick={() => this.setState({ count: this.state.count + 1 })} >
//           Plus One
//         </button>
//         <button 
//           onClick={() => this.setState({ count: this.state.count - 1 })} >
//           Minus One
//         </button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     count: 0,
//   }

//   // method for plus one
//   plusOne = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   //method for minus one
//   minusOne = () => {
//     this.setState({ count: this.state.count - 1 })
//   }



//   render() {
//     const count = this.state.count

//     return (
//       <div>
//         <h1>{ count }</h1>
//         <button onClick={this.plusOne} className="btn btn-add">
//           +1
//         </button>
//         {'  '}
//         <button onClick={this.minusOne} className="btn btn-minus">
//           -1
//         </button>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  state = {
    image: 'https://placekitten.com/200/300',
  }

  changeAnimal = () => {
    let dog = 'https://placekitten.com/200/287'
    let cat = 'https://placekitten.com/200/300'

    let image = this.state.image === cat ? dog : cat

    this.setState({ image: image })
  } 

  render() {
    // const count = this.state.count

    return (
      <div>
        <h1>Cat and Dog</h1>
        <div>
          <img src={this.state.image} alt='animal' />
        </div>
        
        <button onClick={this.changeAnimal} className="btn btn-add">
          Change Animal
        </button>
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
