import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello Worlds</h2>;
};

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px',
//   };
//   return <input placeholder={holder} type="text" style={styledField} />;
// };

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
    };

    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = 'Log in';
  const logged = false;

  return <button>{logged ? 'Enter' : text}</button>;
}

function WhoAmI ({name, surname, link, age}) {
  return(
    <div>
      <h1>My name is {name.firstName} , age - {age()} surname - {surname} </h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
        <WhoAmI name={{firstName: 'John'}} age={()=> {return '28'}}  surname = "Smith" link="google.com" />
        <WhoAmI name={{firstName: 'Alex'}} age={()=> {return '28'}} surname = "Alex" link="google2.com" />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}


export { Header };
export default App;
