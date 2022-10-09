import { Search } from './screens/Search';
import { Details } from './screens/Details';
import { NotFound } from './screens/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export function App() {

  return ( <BrowserRouter>
    <Routes>
      <Route path='/detalhes/:id' element={<Details/>} />
      <Route path='/' element={<Search/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
  );

}

export default App;

