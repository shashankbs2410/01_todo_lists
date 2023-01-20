import { Fragment } from "react";
import classes from "./TasksList.module.css";

const PendingTasks = (props) => {
  const markCompleteHandler = (task) => {
    props.onMarkComplete(task);
    props.onDeletePending(task);
  };

  const deleteHandler = (task) => {
    props.onDeletePending(task);
  };

  let content = (
    <p className={classes.empty}>Nothing to show yet! Please add new tasks.</p>
  );

  if (props.items.length === 0 && props.completedItems.length > 0) {
    content = (
      <p className={classes.empty}>
        No pending tasks as of now. Please add new tasks.
      </p>
    );
  }

  if (props.items.length > 0) {
    content = (
      <div>
        <div className={classes.items}>
          <h3>Pending Tasks</h3>
          {props.items.map((task) => (
            <div key={task.id} id={task.id} className={classes.task}>
              {task.text}
              <button
                title="Mark Completed"
                onClick={() =>
                  markCompleteHandler({ id: task.id, text: task.text })
                }
                className={classes.mark_complete}
              >
                ✔
              </button>
              <button
                className={classes.delete_pending}
                title="Delete Task"
                onClick={() => deleteHandler({ id: task.id, text: task.text })}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <Fragment>{content}</Fragment>;
};

export default PendingTasks;
