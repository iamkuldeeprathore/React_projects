import styles from './ButtonContainer.module.css'
const ButtonContainer = ({item}) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {item.map((items,index) => (
          <button key={index} className={styles.buttonItem}>{items}</button>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
