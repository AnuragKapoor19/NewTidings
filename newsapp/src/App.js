import { Toaster } from 'react-hot-toast';
import './App.css';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/NewTidings' element={<News />} />
          <Route exact path='/buisness' element={<News />} />
          <Route exact path='/crime' element={<News />} />
          <Route exact path='/education' element={<News />} />
          <Route exact path='/entertainment' element={<News />} />
          <Route exact path='/health' element={<News />} />
          <Route exact path='/politics' element={<News />} />
          <Route exact path='/sports' element={<News />} />
          <Route exact path='/technology' element={<News />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
