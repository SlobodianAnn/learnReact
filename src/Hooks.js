import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Slide: ${this.state.slide}`;
//   }

//   componentDidUpdate() {
//     document.title = `Slide: ${this.state.slide}`;
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{' '}
//             {this.state.autoplay ? 'auto' : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

const calcValue = () => {
  console.log('random');
  return Math.random() * (50 - 1) + 1;
};

const countTotal = (num) => {
  console.log('counting...');
  return num + 10;
};

const Slider = (props) => {
  const [slide, setSlide] = useState(calcValue);
  const [autoplay, setAutoPlay] = useState(false);

  //сработает только если будет в дочернем компоненте
  //запоминает функкию и не вызывает ее каждый раз при рендере или апдейте
  const getSomeImages = useCallback(() => {
    console.log('fetching');

    return [
      'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg',
      'https://img.freepik.com/free-photo/the-odenwald-in-germany-is-pure-nature_181624-32381.jpg?w=2000',
    ];
  }, []);

  function loggin() {
    console.log('log');
  }

  // вызывается после рендера и каждый раз после обновления
  // когда идет перерендеринг все внутренности вызываются по новой
  useEffect(() => {
    console.log('effect');
    document.title = `Slide: ${slide}`;
    window.addEventListener('click', loggin);

    // для сomponentWillUnmount
    return () => {
      window.removeEventListener('click', loggin);
    };
  }, [slide]); // первый аргумент функция, второй массив, список зависимостей, следит за опредленным стейтом и только если он изменен, тогда вызывается

  // если с пустым массивом, будет аналогия componentDidMount, только при первом рендеринге

  //

  useEffect(() => {
    console.log('autoplay');
  }, [autoplay]);

  //also we could set state as object and use in this way
  //const [state, setState] = useState({ slide: 0, autoplay: false });

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoPlay((autoplay) => !autoplay);
  }

  //   function changeSlide(i) {
  //     setState((state) => ({ ...state, slide: state.slide + 1 }));
  //   }

  //   function toggleAutoplay() {
  //     setState((state) => ({ ...state, autoplay: !state.autoplay }));
  //   }

  // useMemo кеширует значение
  // useCallBack кеширует функцию
  const total = useMemo(() => {
    return countTotal(slide);
  }, [slide]);

  const style = useMemo(
    () => ({
      color: slide > 4 ? 'red' : 'black',
    }),
    [slide]
  );
  // обьект со стилями можно обернуть в юсмемо, потому что каждый раз при рендеринге
  // будет создаваться обьект с новой ссылкой, ( обьекты сравниваются по ссылке)
  // поэтому реакт будет думать, что переменная обновилась

  useEffect(() => {
    console.log('styles!');
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* {getSomeImages().map((url, i) => {
          return (
            <img className="d-block w-100" src={url} key={i} alt="slide" />
          );
        })} */}

        <Slide getSomeImages={getSomeImages} />

        <div className="text-center mt-5">
          Active slide {slide} <br />
          {autoplay ? 'auto' : null}
        </div>

        <div style={style} className="text-center mt-5">
          Total slides: {total} <br />
          {autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => (
        <img className="d-block w-100" src={url} key={i} alt="slide" />
      ))}
    </>
  );
};

function HookSlider() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default HookSlider;
