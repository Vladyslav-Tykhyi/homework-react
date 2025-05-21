import styles from "../styles/Profile.module.css";

const Profile = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile_info}>
        <img src={props.image} alt="User avatar" className={styles.icon} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <span style={{ display: "block", textAlign: "center" }}>
            Followers
          </span>
          <span style={{ display: "block", textAlign: "center" }}>
            {props.stats.followers}
          </span>
        </li>
        <li className={styles.list_item}>
          <span style={{ display: "block", textAlign: "center" }}>Views</span>
          <span style={{ display: "block", textAlign: "center" }}>
            {props.stats.views}
          </span>
        </li>
        <li className={styles.list_item}>
          <span style={{ display: "block", textAlign: "center" }}>Likes</span>
          <span style={{ display: "block", textAlign: "center" }}>
            {props.stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
