
import './App.css';
import Home from "./components/Home"
import { Switch , Route} from "react-router-dom"
import Error from "./components/Error"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="*"  component={ Error }/>
      </Switch>
    </div>
  );
}

export default App;
