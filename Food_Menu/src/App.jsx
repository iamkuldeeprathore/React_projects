import "bootstrap/dist/css/bootstrap.min.css";
import Errormsg from "./component/Errormsg";
import Fooditems from "./component/Fooditems";
function App() {
  let fooditems = ["pasta", "fruits", "vegetable", "soup", "chocolate"];
  // let fooditems=[]

  return (
    <>
      <center>
        <h1>Healthy Food</h1>
      </center>

    <Errormsg items={fooditems}></Errormsg>
    <Fooditems items={fooditems}></Fooditems>
    </>
  );
}

export default App;
