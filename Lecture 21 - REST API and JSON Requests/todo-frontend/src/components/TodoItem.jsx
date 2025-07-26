function TodoItem({
  id,
  todoName,
  todoDate,
  completed,
  onDeleteClick,
  onCompleteClick,
}) {
  const formattedDate = todoDate
    ? new Date(todoDate).toISOString().split("T")[0]
    : "";

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center gap-2">
        {/* Show a checked, disabled checkbox if completed, else an active checkbox */}
        <input
          type="checkbox"
          checked={completed}
          disabled={completed}
          onChange={(e) => {
            if (e.target.checked && !completed) {
              onCompleteClick(id);
            }
          }}
          className="w-5 h-5 accent-green-500 cursor-pointer disabled:cursor-not-allowed"
        />
        <div
          className={`flex-[2] text-lg ${
            completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todoName}
        </div>
        <div className="flex-[1] text-gray-600">{formattedDate}</div>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
