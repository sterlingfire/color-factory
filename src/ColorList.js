import {Link} from "react-router-dom";

/** ColorList Component
 *  Props:
 *  State:
 *  App -> Router /colors -> ColorList -> {colors}
 */
function ColorList({colors}) {

  /* Render list items for each color in state */
  function renderList(){
    return Object.keys(colors).map(color => <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>)
  }
  return (<div>
    <h2>Welcome to the color factory.</h2>
    <Link to="/colors/new">Add a new color</Link>

    <p>Please Select a color:</p>
    <ul>
      {renderList()}
    </ul>
  </div>);
}
export default ColorList;
