import React, { Component, StrictMode } from 'react';
import styled from 'styled-components';
import './App.css';
import BootstrapTest from './BootstrapTest';
import Ref from './ref';

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  a {
    display: block;
    margin: 10px 0 10px 0;
    color: ${(props) => (props.active ? 'orange' : 'black')};
  }

  input {
    display: block;
    margin-top: 10px;
  }
`;

const HeaderS = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

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
      text: 'some text',
      position: '',
    };
    this.commitInputChanges = this.commitInputChanges.bind(this);
  }

  nextYear = () => {
    console.log('++');
    this.setState((state) => ({
      years: state.years + 1,
      text: 'new text',
    }));
  };

  commitInputChanges(e, color) {
    this.setState({
      position: e.target.value,
    });
  }

  render() {
    const { name, surname, link } = this.props;
    const { position, years } = this.state;
    return (
      <EmpItem active>
        <Button onClick={this.nextYear}>{this.state.text}</Button>
        <HeaderS>
          My name is {name} surname - {surname}, age - {years}, position -{' '}
          {position}
        </HeaderS>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input
            type="text"
            onChange={(e) => this.commitInputChanges(e, 'some color')}
          />
        </form>
      </EmpItem>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: 'shadow p-3 m-3 border rounded',
        });
      })}
    </div>
  );
};

const HelloGreating = () => {
  return (
    <div style={{ width: '600px', margin: '0 auto' }}>
      <DynamicGreating color={'primary'}>
        <h2>This is new headline</h2>
      </DynamicGreating>
    </div>
  );
};

const Message = (props) => {
  return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
  state = {
    counter: 0,
  };

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    return (
      <>
        <button className={'btn btn-promary'} onClick={this.changeCounter}>
          Click me
        </button>
        {this.props.render(this.state.counter)}
      </>
    );
  }
}

function App() {
  return (
    <Wrapper>
      <StrictMode>
        <Header />

        <Counter render={(counter) => <Message counter={counter} />} />

        <HelloGreating />

        <BootstrapTest
          left={
            <DynamicGreating color={'primary'}>
              <h2>This is new headline</h2>
              <h2> This is one more headliine</h2>
            </DynamicGreating>
          }
          right={
            <DynamicGreating color={'primary'}>
              <h2>This is right part</h2>
            </DynamicGreating>
          }
        />

        <WhoAmI name="John" surname="Smith" link="google.com" />
        <WhoAmI name="Alex" surname="Alex" link="google2.com" />
      </StrictMode>
      <Field />
      <Btn />

      <Ref />
    </Wrapper>
  );
}

export { Header };
export default App;
