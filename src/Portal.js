import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import ReactDOM from 'react-dom';

class Form extends Component {
  state = {
    advOpen: false,
  };

  componentDidMount() {
    setTimeout(this.handleClick, 3000);
  }

  handleClick = () => {
    this.setState(({ advOpen }) => ({
      advOpen: !advOpen,
    }));
  };

  render() {
    return (
      <Container>
        <form
          className="w-50 border mt-5 p-3 m-auto"
          style={{ overflow: 'hidden', position: 'relative' }}
          onClick={this.handleClick}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
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
            ></textarea>
          </div>
          {this.state.advOpen ? (
            <PortalItem>
              <Msg />
            </PortalItem>
          ) : null}
        </form>
      </Container>
    );
  }
}

const PortalItem = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
};

const Msg = () => {
  return (
    <div
      style={{
        width: '500px',
        height: '150px',
        backgroundColor: 'red',
        position: 'absolute',
        right: '0',
        bottom: '0',
      }}
    >
      Hello
    </div>
  );
};

function Portal() {
  return <Form />;
}

export default Portal;
