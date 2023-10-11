import styles from "./UserItem.module.css";

function UserItem(props) {

    return (
        <div
            className={styles["user-item"]}
            onClick={() => props.onDelete(props.userData.username)}
        >
            {`${props.userData.username} (${props.userData.age} years old)`}
        </div>
    );
}

export default UserItem;