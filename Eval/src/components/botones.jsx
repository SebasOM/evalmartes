import Button from 'react-bootstrap/Button';

function Botones() {
  return (
    <>
    <div className="boton1">
      <Button className='b1' variant="outline-light">Buy now</Button>{' '}
    </div>
    <div className="boton2">
      <Button className='b2' variant="outline-light">Contact</Button>{' '}
      </div>
    </>
  );
}

export default Botones;