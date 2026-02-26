import styles from "./Fooditems.module.css";
const Fooditems = (props) => {
  let { items, activeitems, handleBuybutton } = props;
  let buy = "buy";

  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.myitem} list-group-item ${activeitems.includes(item) ? "active" : ""}`}
          >
            {item}
            <button
              type="button"
              className={`${styles.buyButton} ${activeitems.includes(item) ? "btn btn-danger" : "btn btn-info"} `}
              onClick={(event) => {
                handleBuybutton(event, item);
              }}
            >
              {activeitems.includes(item) ? "remove" : "buy"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Fooditems;
