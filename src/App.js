import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Podcasts from './components/Podcasts';

// const options = {
//   method: 'GET',
//   url: 'https://musicapi13.p.rapidapi.com/public/search/introspection',
//   headers: {
//     'X-RapidAPI-Key': '8271318248mshd68b2bf0ab4fbe2p157190jsn06c3543f0dc1',
//     'X-RapidAPI-Host': 'musicapi13.p.rapidapi.com'
//   }
// };

function App() {
  
     
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/podcasts" element={<Podcasts/>} />
      <Route exact path="/signin" element={<SignIn/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
