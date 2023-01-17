import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Offers from './pages/Offers';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import Header from './components/Header';



function App() {
  return (
    <>
      <Router>
        <Header>
          
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Signin" element={< Signin/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Forgotpassword" element={< Forgotpassword/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
