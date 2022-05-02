import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
  }

  // componentDidMount() {
  //   this.myRef.current.focus();
  //   //this.myRef.current.doSmth();
  // }

  focusFirstTI = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  };

  setInputRef = (elem) => {
    this.myRef = elem; // создает ссылку на элемент
  };

  render() {
    return (
      <Container>
        <form className="w-50 border mt-5 p-3 m-auto">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              //ref={this.myRef}
              ref={this.setInputRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onClick={this.focusFirstTI}
            ></textarea>
          </div>
        </form>
      </Container>
    );
  }
}

class TextInput extends Component {
  doSmth = () => {
    console.log('message');
  };

  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    );
  }
}

function Ref() {
  return <Form />;
}

export default Ref;
