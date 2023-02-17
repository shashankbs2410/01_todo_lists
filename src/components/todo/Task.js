// import { useState } from "react";
import classes from "./Task.module.css";

const Task = (props) => {
  //   const [isEditing, setIsEditing] = useState(false);
  const task = props.task;
  return (
    <div key={task.id} id={task.id} className={classes.task}>
      {task.text}
      <button
        title="Mark Completed"
        onClick={() =>
          props.markCompleteHandler({ id: task.id, text: task.text })
        }
        className={classes.mark_complete}
      >
        ✔
      </button>
      <button
        className={classes.delete_pending}
        title="Delete Task"
        onClick={() => props.deleteHandler({ id: task.id, text: task.text })}
      >
        🗑
      </button>
    </div>
  );
};

export default Task;
