import { useState } from "react";
import CreateUserError from "../error/CreateUserError";
import styles from "./CreateUser.module.css";

function CreateUser(props) {

    const initialUserValidationState = {
        isValid: true,
        message: ""
    };

    const [userValidation, setUserValidation] = useState(initialUserValidationState);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const username = event.target['username'].value;
        const age = +event.target['age'].value;

        console.log(props.userDetails);
        console.log(username);
        console.log(props.userDetails.some(u => u.username === username));

        if (props.userDetails.some(u => u.username === username)) {
            setUserValidation({
                isValid: false,
                message: `User (${username}) already exists.`
            });
            return;
        }

        if (username.length > 0 && age > 0) {
            setUserValidation(initialUserValidationState);
            props.addUser({ username, age });
        }
        else if (username.length > 0 && age < 0) {
            setUserValidation({
                isValid: false,
                message: "Age cannot be a negative number."
            });
        }
        else {
            setUserValidation({
                isValid: false,
                message: "User data cannot be empty"
            });
        }
    };

    const onCloseHandler = () => {
        setUserValidation(initialUserValidationState);
    };

    return (
        <div className={styles["add-user"]}>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" step="1" />
                </div>
                <div>
                    <input type="submit" value="Add User" />
                </div>
            </form>
            <CreateUserError userValidation={userValidation} onClose={onCloseHandler} />
        </div>
    );
}

export default CreateUser;
