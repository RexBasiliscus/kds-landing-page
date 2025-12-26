import { Link } from "react-router";

const C2AButton = ({
  btnText,
  className = "",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const classes =
    "bg-accent text-white px-4 py-2 rounded-lg font-primary font-medium text-base hover:bg-orange-600 transition-colors inline-block " +
    className;

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={onClick}
      >
        {btnText}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
      >
        {btnText}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default C2AButton;
