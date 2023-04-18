import logo from './logo.svg';
import './App.css';
import { NavBar, Footer} from 'components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from 'components/Home';
import { User } from 'components/User';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./configurations/ButtonConfig.css";
import "./configurations/TableConfig.css";


function App() {
  return (
   <>
    <User/>
  </>
  );
}

export default App;
