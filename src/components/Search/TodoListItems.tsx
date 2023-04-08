import React from "react";

type ListProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TodoListItems = ({ userId, id, title, completed }: ListProps) => {
  return (
    <ul>
      <li>User Id: {userId}</li>
      <li>Id: {id}</li>
      <li>Title: {title}</li>
      <li>status: {completed ? "Completed" : "Not Completed"}</li>
    </ul>
  );
};

export default TodoListItems;
