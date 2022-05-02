import React from 'react';
import ReactDOM from 'react-dom/client';
import userImage from './images/him.jpeg';

// syntax of functional componenet
// const jsx = <tag>Content</tag>

// const ComponentName = () => {
//   return jsx
// }





const headerStyle = {
  backgroundImage: `url(${userImage})`
  backgroundColor: 'cyan',
  fontFamily: 'Helvetic Neue',
  padding:25,
  lineHeight: 1.5

}

const header = (
  <header style={headerStyle}>
    <h1>Welcome to React JS</h1>
    <h2>Second React session</h2>
    <p>First session for react</p>
    <small>April 28, 2022</small>
  </header>
);

// React Componenet
const Header = () => {
  return header
}

const UserCard = () => (
    <div>
      <img src={userImage} alt='Himanshu' />
    </div>
)







const Main = () => (
  <main>
    <p>This is the first para for the development of react application</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    <UserCard />
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
