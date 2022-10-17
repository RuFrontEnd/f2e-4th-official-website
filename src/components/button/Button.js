import styles from "./button.module.scss";

function Button(props) {
  return (
    <button className={`${styles.btn} ${props.className} rounded-pill ${props.secondary && `${styles.secondary}`}`}>
      {props.children}
    </button>
  );
}

export default Button;
