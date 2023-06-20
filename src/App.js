import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageProvider } from "components/PageDisplay/authPageProvider";
import "./configurations/ButtonConfig.css";
import "./configurations/TableConfig.css";
import "configurations/Background.css";
import { AppProvider } from "store/store";

/**
 * Main application component.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  return (
    <div className="App">
      {/* Wrap the app in the Redux store provider */}
      <AppProvider>
        {/* The provider for the page with the given id */}
        <PageProvider id="a854adb9-b29a-4062-95b3-cfd685071f16" />
      </AppProvider>
    </div>
  );
}

export default App;
