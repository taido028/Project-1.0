

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
      <GroupPageProvider id="cd49e153-610c-11ed-bf19-001a7dda7110" />
    </AppProvider>
    </div>
  
  );
}

export default App;
