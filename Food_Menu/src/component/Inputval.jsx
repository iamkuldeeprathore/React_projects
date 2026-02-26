import styles from "./Inputval.module.css";
const Inputval = ({handleOnchange}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter your food"
        className={`${styles.myInput}`}
        onKeyDown={handleOnchange}
      />
    </>
  );
};
export default Inputval;
