import styles from './App.module.css'
import ButtonContainer from './components/ButtonContainer.Jsx';
function App(){
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
  return (
    <>
      <div className={styles.calculatorContainer}>
        <input type="text" className={styles.display} />
        <ButtonContainer item={icon}></ButtonContainer>
      </div>
    </>
  );
}
export default App;