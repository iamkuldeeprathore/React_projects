import styles from '../App.module.css'
const Display = ({Exp}) => {
  return (
    <>
      <input type="text" className={styles.display} readOnly value={Exp}/>
    </>
  );
};
export default Display;
