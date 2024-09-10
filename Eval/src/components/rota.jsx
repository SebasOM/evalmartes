
import Carousel from 'react-bootstrap/Carousel';
import dispositivos from '../assets/dispositivos.png';

function Ima() {
    return (
        <div className='carou'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dispositivos}
              style={{height:300}}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dispositivos}
              style={{height:300}}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={dispositivos}
              style={{height:300}}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
      );
}

export default Ima;