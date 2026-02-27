function Addbutton({handleAddButton}){
  return (
    <button type="button" className="btn btn-success add-button" onClick={handleAddButton}>
      ADD
    </button>
  );
}
export default Addbutton;