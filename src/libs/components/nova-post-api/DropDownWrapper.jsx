import { useState } from "react";

import { NovaPostList } from "./NovaPostList";
import { objectStateKeys } from "./enums/keys";

var DropDownWrapper = ({ dataMap, classname = "", onEvent }) => {
  const [isOpen, setisOpen] = useState(false);
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
