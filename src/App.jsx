import Todo_heading from "./components/Todo_heading";
import Input_items from "./components/Input_items";
import Input_dates from "./components/Input_date";
import Addbutton from "./components/Addbutton";
import Displaycontainer from "./components/Displaycontainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App(){
  let todoitems = [
    { name: "buy milk", duedate: "25/03/2026" },
    { name: "go to college", duedate: "25/03/2026" },
    { name: "go to college", duedate: "25/03/2026" },
  ];
  // console.log(todoitems);
  return (
    <>
      <Todo_heading />
      <center className="Todo-container">
        <Input_items />
        <Input_dates />
        <Addbutton></Addbutton>
      </center>
      <Displaycontainer items={todoitems}></Displaycontainer>
    </>
  );
}
export default  App;