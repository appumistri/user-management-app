import UserItem from "./UserItem";
import styles from "./UserList.module.css";

function UserList(props) {

    const deleteUserHandler = (username) => {
        props.onDelete(username);
    };

    let userList = "No users to display"

    if (props.userDetails.length > 0) {
        userList = props.userDetails.map(data =>
            <UserItem
                key={data.username}
                userData={data}
                onDelete={deleteUserHandler}
            />)
    }

    return (
        <div className={styles["user-list"]}>
            {userList}
        </div>
    );
}

export default UserList;