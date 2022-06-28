import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Form from './Form';
import dataContext from './context';

const { Provider, Consumer } = dataContext;

// если нужно сравнить обьекты
// function propsCompare(prevProps, nextProps) {
//   return (
//     prevProps.mail.name === nextProps.mail.name &&
//     prevProps.text === nextProps.text
//   );
// }

// memo если значения пропсов остались такие же, он не будет заново рендерить компонент
// механизм поверхностного сравнения (+обьекты не равны друг другу)
// стоит использовать когда пропсы часто не меняются

// class InputComponent extends Component {
//   static contextType = dataContext;
//   render() {
//     return (
//       // <Consumer>
//       //   {(value) => {
//       //     return (
//       //       <input
//       //         value={value.mail}
//       //         type="email"
//       //         className="form-control"
//       //         id="exampleFormControlInput1"
//       //         placeholder="name@example.com"
//       //       />
//       //     );
//       //   }}
//       // </Consumer>
//       <input
//         value={this.context.mail}
//         type="email"
//         className="form-control"
//         id="exampleFormControlInput1"
//         placeholder="name@example.com"
//       />
//     );
//   }
// }

//InputComponent.contextType = dataContext;

function App() {
  const [data, setData] = useState({
    mail: 'namehApp@example.com',
    text: 'some text',
    forceChangeMail: forceChangeMail,
  });

  function forceChangeMail() {
    setData({ ...data, mail: 'text@gmail.com' });
  }

  return (
    <Provider value={data}>
      <Form text={data.text} />
      <button
        onClick={() =>
          setData({
            ...data,
            mail: 'ame@example.com',
            text: 'some text',
          })
        }
      >
        Click me
      </button>
    </Provider>
  );
}

export default App;
