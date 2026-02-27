import Todo_heading from "./components/Todo_heading";
import Input_items from "./components/Input_items";
import Input_dates from "./components/Input_date";
import Addbutton from "./components/Addbutton";
import Displaycontainer from "./components/Displaycontainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoitems, setTodoItems] = useState([]);
  const [newname, setNewName] = useState();
  const [newdate, setNewDate] = useState();

  const handleAddButton = () => {
    const updatedItems = [...todoitems, { name: newname, duedate: newdate }];
    // console.log(updatedItems);

    setTodoItems(updatedItems);

    // Clear inputs after adding
    setNewName("");
    setNewDate("");
  };

  const handleInputItem = (event) => {
    setNewName(event.target.value);
  };

  const handleInputDate = (event) => {
    setNewDate(event.target.value);
  };

  const handleDeleteButton=(name,duedate)=>{
    const updatelist=todoitems.filter((it)=>it.name!==name);
    console.log(updatelist);
    setTodoItems(updatelist);
  }

  return (
    <>
      <Todo_heading />
      <center className="Todo-container">
        <Input_items value={newname} handleInputItem={handleInputItem} />
        <Input_dates value={newdate} handleInputDate={handleInputDate} />
        <Addbutton handleAddButton={handleAddButton} />
      </center>
      <Displaycontainer items={todoitems} handleDeleteButton={handleDeleteButton}/>
    </>
  );
}

export default App;
