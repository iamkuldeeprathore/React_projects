import "bootstrap/dist/css/bootstrap.min.css";
import Errormsg from "./component/Errormsg";
import Fooditems from "./component/Fooditems";
import Inputval from "./component/Inputval";
import { useState } from "react";
// import { use } from "react";
function App() {
  // let fooditems = ["pasta", "fruits", "vegetable", "soup", "chocolate"];
  // let fooditems=[]
  let [fooditems, setfooditems] = useState([]);
  console.log(fooditems);
  const handleOnchange = (event) => {
    let newfooditems = [...fooditems, event.target.value];
    if (event.key === "Enter") {
      setfooditems(newfooditems);
      event.target.value = "";
    }
  };

  let [activeitems, setactiveitems] = useState([]);

  const handleBuybutton = (event, item) => {
    let newactiveitems=[...activeitems,item];
    setactiveitems(newactiveitems);
  };

  return (
    <>
      <center>
        <h1>Healthy Food</h1>
      </center>
      <Inputval handleOnchange={handleOnchange}></Inputval>
      <Errormsg items={fooditems}></Errormsg>
      <Fooditems
        items={fooditems}
        activeitems={activeitems}
        handleBuybutton={handleBuybutton}
      ></Fooditems>
    </>
  );
}

export default App;
