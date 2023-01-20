import { Fragment } from "react";
import classes from "./TasksList.module.css";

const CompletedTasks = (props) => {
  const markIncompleteHandler = (task) => {
    props.onMarkIncomplete(task);
    props.onDeleteCompleted(task);
  };

  const deleteHandler = (task) => {
    props.onDeleteCompleted(task);
  };

  let content = null;

  if (props.items.length > 0 && props.completedItems.length === 0) {
    content = (
      <p className={classes.empty}>
        No Task is finished yet! Mark the tasks to complete.
      </p>
    );
  }

  if (props.completedItems.length > 0) {
    content = (
      <div className={classes.items}>
        <h3>Completed Tasks</h3>
        {props.completedItems.map((task) => (
          <div key={task.id} id={task.id} className={classes.completed_task}>
            {task.text}
            <button
              title="Mark incomplete"
              onClick={() =>
                markIncompleteHandler({ id: task.id, text: task.text })
              }
              className={classes.mark_incomplete}
            >
              ✘
            </button>
            <button
              className={classes.delete_completed}
              title="Delete Task"
              onClick={() => deleteHandler({ id: task.id, text: task.text })}
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default CompletedTasks;
