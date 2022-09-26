import { BrowserRouter, Routes,Route } from 'react-router-dom';

import PrimarySearchAppBar from './App'
import Hospedagem from './pages/hospedagemPage/hospedagem';
import SoftWinHotel from './pages/hospedagemPage/Hoteis/SoftWinHotel';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<PrimarySearchAppBar/>}/>
        <Route path='hospedagem' element={<Hospedagem/>}/>
        <Route path='softWinHotel' element={<SoftWinHotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
