import { useState } from "react";

import TodoForm from "./components/todo/TodoForm";
import PendingTasks from "./components/todo/PendingTasks";
import CompletedTasks from "./components/todo/CompletedTasks";
import GoogleLoginComponent from "./components/login/GoogleLoginComponent";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [signedIn, setSignedIn] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const signInChangeHandler = () => {
    setSignedIn(!signedIn);
  };

  const markCompleteHandler = (task) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks];
      updatedCompletedTasks.push(task);
      return updatedCompletedTasks;
    });
  };

  const deletePendingHandler = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((tasks) => tasks.id !== task.id);
      return updatedTasks;
    });
  };

  const markIncompleteHandler = (task) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift(task);
      return updatedTasks;
    });
  };

  const deleteCompletedHandler = (task) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = prevCompletedTasks.filter(
        (tasks) => tasks.id !== task.id
      );
      return updatedCompletedTasks;
    });
  };

  const addTaskHandler = (enteredInput) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks.push({
        text: enteredInput,
        id: Math.random().toString(),
      });
      return updatedTasks;
    });
  };

  return (
    <div>
      <GoogleLoginComponent onsignInChange={signInChangeHandler} />
      {signedIn && <TodoForm onAddTask={addTaskHandler} />}
      {signedIn && (
        <PendingTasks
          items={tasks}
          completedItems={completedTasks}
          onMarkComplete={markCompleteHandler}
          onDeletePending={deletePendingHandler}
        />
      )}
      {signedIn && (
        <CompletedTasks
          items={tasks}
          completedItems={completedTasks}
          onMarkIncomplete={markIncompleteHandler}
          onDeleteCompleted={deleteCompletedHandler}
        />
      )}
    </div>
  );
}

export default App;
