import Carrocel from './Widgets/Carrocel/Carrocel';
import './hoteis.scss'
import Galeria from './Widgets/Galeria/galeria';

function SoftWinHotel() {
  return (
    <>
    <div className='bodyHotel'>
      <p className='nameHotel'>Soft Win Hotel</p>


    </div>
      <Carrocel />
      
      <Galeria/>
    </>
  );
}

export default SoftWinHotel;
