import { useState } from "react";
import { useDispatch } from "react-redux";
import { taskActions } from "../../store/tasks-slice";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [enteredInput, setEnteredInput] = useState("");
  const [inputisValid, setInputIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    setInputIsValid(true);
    setEnteredInput(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredInput.trim().length === 0) {
      setInputIsValid(false);
      return;
    }

    dispatch(
      taskActions.addPendingTask({
        id: Math.random().toString(),
        text: enteredInput,
      })
    );

    setInputIsValid(true);
    setEnteredInput("");
  };

  return (
    <div className={classes.background}>
      <header />
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <label htmlFor="Task">Add New Task</label>
        <input
          id="Task"
          title="Type the task that you want to complete"
          onChange={inputChangeHandler}
          value={enteredInput}
          className={!inputisValid ? classes.input_error : ""}
        />
        {!inputisValid && (
          <p className={classes.form_error}>
            Please enter a valid non-empty Task!
          </p>
        )}
        <button type="submit" title="Add task to to-do list">
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
