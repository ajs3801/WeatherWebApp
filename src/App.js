import { Routes, Route } from 'react-router-dom';
import './App.css';

// import routes components
import { Navigation } from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

export const App = () => {
  return (
    <div className='app_container'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index={true} element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
