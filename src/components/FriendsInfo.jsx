import clsx from "clsx";
import css from "../styles/Friends.module.css";

const FriendsQuantity = (props) => {
  return (
    <div>
      <ul className={css.wrapper}>
        {props.friends.map((item) => (
          <li key={item.id} className={css.list_item}>
            <img
              src={item.avatar}
              alt={`${item.name}'s avatar`}
              className={css.icon}
            />
            <h2 className={css.name}>{item.name}</h2>
            <p className={clsx(item.isOnline ? css.green : css.red)}>
              {item.isOnline ? "Online" : "Offline"}{" "}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FriendsQuantity;
