import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "dummy 1",
      note: "This is dummy note 1",
    },
    {
      id: 2,
      title: "dummy 2",
      note: "This is dummy note 2",
    },
  ],
};

const tasksSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { title, note } = action.payload;
      const size = state.tasks.length;
      state.tasks.push({
        id: size + 1,
        title: title,
        note: note,
      });
    },

    editTask: (state, action) => {
      const { id, title, note } = action.payload;
      
        state.tasks[id-1] = {id: id, title:title, note:note};
      
    },

    deleteTask: (state, action) => {
      const noteId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === noteId);
      if (taskIndex >= 0) {
        state.tasks.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
