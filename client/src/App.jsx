import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import SignIn from "./pages/signIn.jsx";
import Profile from './pages/profile.jsx'
import About from "./pages/About.jsx";
import Signup from "./pages/Signup.jsx";
import Header from "./components/Header.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/sign-up' element={<Signup />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;