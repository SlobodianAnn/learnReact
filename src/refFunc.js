import { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function useUnputWithValidate(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };

  return { value, onChange, validateInput }; //  {value: value, onChange: onChange}
}

const Form = () => {
  // const [text, setText] = useState('');
  const myRef = useRef(1); // обновление юзреф не вызывает перерендеринг компонента
  //const [textArea, setTextArea] = useState('');

  const input = useUnputWithValidate('');
  const textArea = useUnputWithValidate('');
  // const focusFirstTI = () => {
  //   myRef.current.focus();
  // };

  const color = input.validateInput() ? 'text-danger' : null;

  useEffect(() => {
    myRef.current++;
    console.log(myRef.current);
  });

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            value={`${input.value} / ${textArea.value}`}
            type="text"
            className="form-control"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            onChange={input.onChange}
            type="email"
            value={input.value}
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            // onClick={focusFirstTI}
            onChange={textArea.onChange}
            value={textArea.value}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
};

function RefFunc() {
  return <Form />;
}

export default RefFunc;
