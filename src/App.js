import AllRoutes from "./allroutes/AllRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AllRoutes />
      </Provider>
    </div>
  );
}

export default App;
