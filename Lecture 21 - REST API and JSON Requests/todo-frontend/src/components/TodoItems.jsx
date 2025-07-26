import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  return (
    <div className="space-y-4">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          completed={item.completed}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          onCompleteClick={onCompleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
