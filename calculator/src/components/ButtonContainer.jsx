import styles from './ButtonContainer.module.css'
const ButtonContainer = ({item ,handleOnchange}) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {item.map((items,index) => (
          <button key={index} className={styles.buttonItem} onClick={()=>handleOnchange(items)}>{items}</button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
