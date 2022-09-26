// import { Box } from '@mui/system';
import './hospedagem.scss';
import RoomIcon from '@mui/icons-material/Room';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HoverRating from './Rating/rating';

export default function Hospedagem() {
  return (
    <div className="layoutContainer">
      <h1 className="title">Hospedagens de Destaque</h1>
      <div className="hotelLink">
        <span className="conteudoLink">
          <a href="/SoftWinHotel">
            <img src="/images/hoteis/soft-win-hotel.jpg" alt="Soft Win Hotel" />
            <p>
              <span>R$ 85,00/por pessoa</span>
              <span className="inlineText">
                <CalendarMonthIcon className="calendar" /> 5 Dias/6 Noites
              </span>
            </p>
            <RoomIcon style={{ fontSize: '30px' }} />
            <span className="nameHotel"> Soft Win Hotel</span>
            <p>
              <HoverRating />
            </p>
          </a>
        </span>
        <span className="conteudoLink">
          <a href="https://google.com.br">
            <img src="/images/hoteis/soft-win-hotel.jpg" alt="Hotel Luzeiro" />
            <p>R$ 85,00</p>
            <RoomIcon style={{ fontSize: '30px' }} />
          </a>
        </span>
        <span className="conteudoLink">
          <a href="https://google.com.br">
            <img src="/images/hoteis/soft-win-hotel.jpg" alt="Hotel Luzeiro" />
            <div>
              <p>R$ 85,00</p>
              <RoomIcon />
            </div>
          </a>
        </span>
      </div>
    </div>
  );
}
