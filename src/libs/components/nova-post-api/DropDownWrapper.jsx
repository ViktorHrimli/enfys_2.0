import { NovaPostList } from "./NovaPostList";

var DropDownWrapper = ({ dataMap, classname = "", onEvent }) => {
  return (
    dataMap &&
    dataMap.map((item, id) => (
      <NovaPostList
        key={item.Ref || item.Description}
        className={classname}
        onClick={() => onEvent(item)}
      >
        <p>{item.Description}</p>
      </NovaPostList>
    ))
  );
};

export { DropDownWrapper };
