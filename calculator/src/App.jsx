import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer.Jsx";
import Display from "./components/Display";
function App() {
  let icon = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  let [Exp, setExp] = useState("");

  const handleOnchange = (char) => {
    let newExp=''; 
    if (char !== "=" && char !=='C') {
      newExp = Exp + char;
      setExp(newExp);
      // console.log(newExp);
    }
    else if (char =='C'){
      setExp('')
    }
    else{
      // console.log(eval(Exp));
      setExp(eval(Exp));
    }
  };
  return (
    <>
      <div className={styles.calculatorContainer}>
        <Display Exp={Exp}></Display>
        <ButtonContainer
          item={icon}
          handleOnchange={handleOnchange}
        ></ButtonContainer>
      </div>
    </>
  );
}
export default App;
