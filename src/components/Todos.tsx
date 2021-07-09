import Todo from "../models/todos";

type props = {
  items: Todo[];
  remove: (id: string) => void;
};

const Todos: React.FC<props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} item={item} remove={props.remove} />
      ))}
    </ul>
  );
};

type itemProps = {
  item: Todo;
  remove: (id: string) => void;
};

const TodoItem: React.FC<itemProps> = (props) => {
  const { text, id } = props.item;
  return <li onClick={() => props.remove(id)}> {text}</li>;
};

export default Todos;
