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

// function WhoAmI ({name, surname, link, age}) {
//   return(
//     <div>
//       <h1>My name is {name.firstName} , age - {age()} surname - {surname} </h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: 'some text'
    };
  }

  nextYear = () => {
    console.log('++');
    this.setState(state => ({
      years: state.years + 1,
      text: 'new text'
    }))
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>
          My name is {name} surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
        <WhoAmI name="John" surname="Smith" link="google.com" />
        <WhoAmI name="Alex" surname="Alex" link="google2.com" />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
