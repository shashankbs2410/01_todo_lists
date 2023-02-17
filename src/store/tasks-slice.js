import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: { pendingTasks: [], completedTasks: [] },
  reducers: {
    addPendingTask(state, action) {
      state.pendingTasks.push(action.payload);
    },
    deletePendingTask(state, action) {
      const id = action.payload;
      state.pendingTasks = state.pendingTasks.filter((task) => task.id !== id);
    },
    deleteCompletedTask(state, action) {
      const id = action.payload;
      state.completedTasks = state.completedTasks.filter(
        (task) => task.id !== id
      );
    },
    markCompleteTask(state, action) {
      state.completedTasks.push(action.payload);
    },
    markIncompleteTask(state, action) {
      state.pendingTasks.unshift(action.payload);
    },
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
