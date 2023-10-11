import styles from "./CreateUserError.module.css";

function CreateUserError(props) {

    const onClose = () => {
        props.onClose(false);
    };

    let error = "";

    if (!props.userValidation.isValid) {
        error = (<div className={styles["popup-container"]}>
            <div className={styles["popup"]}>
                <h2>Error</h2>
                <p>{props.userValidation.message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>)
    }

    return error;
}

export default CreateUserError;