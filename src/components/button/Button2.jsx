import "./styles.css";

const Button2 = ({ text, children }) => {
  return (
    <button className="button1 flex items-center">
      {children ? children : ""} {text}
    </button>
  );
};
export default Button2;
