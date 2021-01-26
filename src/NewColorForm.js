import { useState } from "react";
import { Redirect, useHistory} from "react-router-dom";

/** Component NewColorForm
 *
 */

const defaultInitialFormData = { name: "", color: "" };

function NewColorForm({ saveColor }) {
  const [formData, setFormData] = useState(defaultInitialFormData);
  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    saveColor(formData);
    setFormData(defaultInitialFormData);
    history.push("/colors");
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="name">New Color Name:</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}></input>
        </div>
        <div>
          <label for="color">New Color:</label>
          <input
            type="color"
            id="color"
            name="color"
            onChange={handleChange}
            value={formData.color}></input>
        </div>
        <button>Add Color</button>
      </form>
    </div>);
}
export default NewColorForm;
