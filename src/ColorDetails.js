import { useParams, Link, Redirect } from "react-router-dom";

/** Component ColorDetails
 *
 */
function ColorDetails({ colors }) {
  const { color } = useParams();

  if (!colors[color]) return <Redirect to="/colors"></Redirect>;

  return (
    <div style={{ backgroundColor: color }}>
      <h2>This is {color}.</h2>

      <h2>Isn't it beautiful?</h2>

      <Link to="/colors">GO BACK.</Link>
    </div>);
}
export default ColorDetails;
