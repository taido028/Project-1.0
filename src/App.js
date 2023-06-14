import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageProvider } from "components/PageDisplay/authPageProvider";
import "./configurations/ButtonConfig.css";
import "./configurations/TableConfig.css";
import "configurations/Background.css";
import { AppProvider } from "store/store";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <PageProvider id="a854adb9-b29a-4062-95b3-cfd685071f16" />
      </AppProvider>
    </div>
  );
}

export default App;
