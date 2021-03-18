import { Provider } from "react-redux";
import store from "./store";
import Router from "./components/Routes/Routes";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
