import { SetStateAction } from "react";
import { useRef, FC, Dispatch } from "react";
import Todo from "../models/todos";

type props = { setTodos: Dispatch<SetStateAction<Todo[]>> };

const NewTodo: FC<props> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const text = textRef.current?.value;
    if (text) {
      props.setTodos((pre) => [...pre, new Todo(text)]);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text</label>
        <input ref={textRef} type="text" />
        <button type="submit"> Add Todo </button>
      </form>
    </>
  );
};

export default NewTodo;
