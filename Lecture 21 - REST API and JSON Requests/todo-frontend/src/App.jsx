import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useEffect, useState } from "react";
import {
  addItemToServer,
  deleteItemFromServer,
  getItemsFromServer,
  markItemCompletedOnServer,
} from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  // it will execute only once when the app loads
  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  });

  const handleNewItem = async (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    const serverItem = await addItemToServer(itemName, itemDueDate);
    const newTodoItems = [...todoItems, serverItem];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    const newTodoItems = todoItems.filter((item) => item.id !== deletedId);
    setTodoItems(newTodoItems);
  };

  const handleTaskCompleted = async (id) => {
    
    await markItemCompletedOnServer(id);

    const updatedItems = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });

    setTodoItems(updatedItems);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <AppName />
          <AddTodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
            onCompleteClick={handleTaskCompleted}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
