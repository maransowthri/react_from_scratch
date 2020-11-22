import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actions";

export const todos = (state = [], action) => {
  console.log(action);
  const { type, payload } = action;
  console.log(payload);
  const { text } = payload;

  switch (type) {
    case CREATE_TODO: {
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.text !== text);
    }
    case COMPLETE_TODO: {
      return state.map((todo) =>
        todo.text !== text ? todo : { ...todo, isCompleted: !todo.isCompleted }
      );
    }
    default: {
      return state;
    }
  }
};
