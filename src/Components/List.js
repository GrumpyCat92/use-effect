import { useEffect } from "react";
import { url } from "../Constants";

export default function List({ items, setItems, chooseItem, active }) {
  useEffect(() => {
    fetch(`${url}users.json`)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <ul>
      {items.map((i) => (
        <li
          className={
            active == i.id
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={i.id}
          onClick={() => chooseItem(i)}
        >
          {i.name}
        </li>
      ))}
    </ul>
  );
}
