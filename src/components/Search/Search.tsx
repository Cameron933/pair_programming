import { useState, useEffect, useMemo } from "react";
import debounce from "@/util/debounce";
import TodoListItems from "./TodoListItems";

type toDoData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [data, setData] = useState<toDoData[]>([]);
  const [filertedData, setFilertedData] = useState<toDoData[]>([]);

  const filterResult = (search: string) => {
    const resultData = data.filter(({ title }) => {
      title.toLocaleLowerCase().includes(search);
    });
    return resultData;
  };

  const sliceResult = (dataArray: toDoData[]) => {
    return dataArray.slice(0, 10);
  };

  const sliceReversed = (dataArray: toDoData[]) => {
    return sliceResult(dataArray.reverse());
  };

  useEffect(() => {
    const getData = async () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((error) => console.log(error));
    };
    getData();
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  const debouncedChangeHandler = useMemo(() => debounce(onChangeHandler, 500), []);

  useEffect(() => {
    console.log(searchValue);
    const newFilered = data.filter((todo) => {
      return todo.title.includes(searchValue);
    });
    setFilertedData(newFilered);
  }, [data, searchValue]);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="input" onChange={debouncedChangeHandler} />
      {searchValue && (
        <div>
          {filertedData.map((todo) => (
            <TodoListItems
              key={todo.id}
              userId={todo.userId}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
