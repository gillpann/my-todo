import { todoProps } from "@/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({ todo }: { todo: todoProps }) => {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  const formatDate = (date: Date | null | undefined) => {
    if (!date) return null;
    return new Date(date).toLocaleString("id-ID", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      style={todoStyle}
      className="w-11/12 sm:w-10/12 mx-auto flex items-center justify-between bg-slate-200 py-3 px-3 sm:py-4 sm:px-6 rounded-2xl"
    >
      {/* Check Button */}
      <div className="flex-shrink-0">
        <ChangeTodo todo={todo} />
      </div>

      {/* Todo Content */}
      <div className="flex-1 text-center font-bold uppercase mx-2 sm:mx-4 min-w-0">
        <div className="truncate text-sm sm:text-base">{todo.title}</div>
        {todo.deadline && (
          <div className="text-xs text-gray-600 font-normal truncate">
            Deadline: {formatDate(todo.deadline)}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
