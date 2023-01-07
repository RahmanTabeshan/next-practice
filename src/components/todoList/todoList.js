import { CheckIcon, TrashIcon, PencilAltIcon } from "@heroicons/react/outline";
import Link from "next/link";
const TodoList = ({ data, onDelete , onComplete }) => {
    const { todos } = data;
    let items;
    if (todos) {
        items = todos;
    } else {
        items = data;
    }
    return (
        <>
            {items.map((todo, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-lg"
                >
                    <Link
                        href={`/todos/${todo._id}`}
                        className={`${todo.isCompleted ? "line-through" : ""}`}
                    >
                        {todo.title}
                    </Link>
                    <div className="flex gap-x-3 items-center">
                        <button onClick={()=>onComplete(todo._id)}>
                            {todo.isCompleted ? (
                                <CheckIcon className="w-6 h-6 stroke-green-400" />
                            ) : (
                                <span className="block w-5 h-5 border-2 border-neutral-500 rounded-full"></span>
                            )}
                        </button>
                        <button onClick={() => onDelete(todo._id)}>
                            <TrashIcon className="w-6 h-6 stroke-red-400" />
                        </button>
                        <Link href={`/todos/edit/${todo._id}/`}>
                            <PencilAltIcon className="w-6 h-6 stroke-blue-400" />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TodoList;
