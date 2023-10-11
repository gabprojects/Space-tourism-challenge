import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Crew from './pages/Crew'
import Destination from './pages/Destination';
import Technology from './pages/Technology';
import NavigationBar from './components/NavigationBar';

export default function AppRouter() {
    return(
        <Router>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/crew' element={<Crew />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/technology' element={<Technology />} />
            </Routes>
        </Router>
    );
}