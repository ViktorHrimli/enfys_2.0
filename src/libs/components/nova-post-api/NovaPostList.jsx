import classNames from "classnames";

const NovaPostList = ({ children, className, onClick }) => {
  return (
    <li className={classNames("", className)} onClick={onClick}>
      {children}
    </li>
  );
};

export { NovaPostList };
