import Displayitems from "./Displayitems";
function Displaycontainer({items,handleDeleteButton}) {
  // console.log(items)
  return (
    <>
      <Displayitems item={items} handleDeleteButton={handleDeleteButton}></Displayitems>
    </>
  );
}
export default Displaycontainer;
