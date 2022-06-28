import { createContext } from 'react';

const dataContext = createContext({
  mail: 'nameContext@example.com',
  text: 'some text ghgh',
  forceChangeMail: () => {},
});

export default dataContext;

// значение по умолчанию работает тогда, когда провайдера не существует
