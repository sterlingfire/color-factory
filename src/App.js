import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import ColorDetails from "./ColorDetails";
import { useState } from "react";
import './App.css';

function App() {
  const [colors, setColors] = useState({ "red": "#ff0000", "green": "#00ff00", "blue": "#00000ff" });

  /* Savecolors
   * Passed to NewColorForm as prop
   *
   */
  function saveColor(newColor) {
    setColors({...colors, [newColor.name] : newColor.color});
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Factory!</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/colors/new">
              <NewColorForm saveColor={saveColor} />
            </Route>
            
            <Route exact path="/colors">
              <ColorList colors={colors} />
            </Route>

            <Route exact path="/colors/:color">
              <ColorDetails colors={colors} />
            </Route>


            <Redirect to="/colors"></Redirect>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
