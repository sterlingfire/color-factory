
/** Component NewColorForm
 *
 */
function NewColorForm({saveColor}) {
  return (<div>
    <form onSubmit={saveColor}>
      <input type="color" id="color" name="color"
            value="#000000"> </input>
      <label for="color">New Color:</label>
    </form>
  </div>);
}
export default NewColorForm;
