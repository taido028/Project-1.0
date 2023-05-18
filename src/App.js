

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GroupPageProvider } from 'componentsss/GroupPageProvider';
import "./configurations/ButtonConfig.css";
import "./configurations/TableConfig.css"
import { AppProvider } from 'store/store';


function App() {
  return (
    <div className="App">
    <AppProvider>
      <GroupPageProvider id="a854adb9-b29a-4062-95b3-cfd685071f16" />
    </AppProvider>
    </div>
  
  );
}

export default App;
