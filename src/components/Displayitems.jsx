function Displayitems(props){
  let {item}=props;
  console.log(item);
 
  return (
    <>
      <div className="container text-center ">
        {item.map((list) => (
          <div className="row each-row">
            <div className="col-4 my-item">{list.name}</div>
            <div className="col-4 my-date">{list.duedate}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger my-button">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Displayitems;