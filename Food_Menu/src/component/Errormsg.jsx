const Errormsg = ({ items } = props) => {


  // let fooditems = ["pasta", "fruits", "vegetable", "soup", "chocolate"];
  // let fooditems=[];
  return <>{items.length === 0 && <h1>I am still hungry</h1>}</>;
};
export default Errormsg;
