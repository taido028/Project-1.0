import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar, Footer} from 'pages/Layout';
import { Home } from 'pages/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from 'components/User';
import "./configurations/ButtonConfig.css";
import "./configurations/TableConfig.css";


function App() {
  return (
  <User/>
  );
}

export default App;
