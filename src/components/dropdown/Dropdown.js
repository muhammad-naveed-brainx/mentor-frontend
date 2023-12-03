import styles from "./dropdown.module.scss";

const Dropdown = (props) => {
  const { label, options, value, onChange, onClick } = props;
  return (
    <div className={styles.dropContainer}>
      <h4 className={styles.label}> {label} </h4>
      <select value={value} onChange={onChange}>
        <option>--</option>
        {options?.map((option) => {
          if (typeof option === "string") {
            return <option key={option}>{option} </option>;
          } else {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          }
        })}
        <option value="0" onClick={onClick}>
          Add new
        </option>
      </select>
    </div>
  );
};

export default Dropdown;
