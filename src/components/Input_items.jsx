function Input_items({value,handleInputItem}) {
  return <input type="text" placeholder="enter here" className="input-display" onChange={handleInputItem}
  value={value}/>;
}
export default Input_items;