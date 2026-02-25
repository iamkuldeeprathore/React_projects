import styles from "./Fooditems.module.css";
const Fooditems = (props) => {
  let { items } = props;

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className={`${styles.myitem} list-group-item`}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fooditems;
