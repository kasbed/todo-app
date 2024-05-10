import { type TodoId, type ITodo } from "../types";
import { Todo } from "./Todo";

interface Props {
    todos: ITodo[];
    onRemoveTodo: ({id}:TodoId) =>void;
    handleComplete: ({id, completed}:Pick<ITodo, 'id' | 'completed'>) =>void;
}

export const Todos: React.FC<Props> = ({todos, onRemoveTodo, handleComplete}) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id}
                    className={`${todo.completed ? 'completed': ''}`}
                >
                    <Todo key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={onRemoveTodo}
                        onToggleCompleteTodo={handleComplete} />
                </li>
            ))}
    </ul>
    )
}