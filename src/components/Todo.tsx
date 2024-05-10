import { type TodoId, type ITodo } from "../types";

interface Props extends ITodo {
    onRemoveTodo: ({id}: TodoId) => void;
    onToggleCompleteTodo: ({id, completed}:Pick<ITodo, 'id' | 'completed'>) =>void;
}

export const Todo:React.FC<Props> = ( {id, title, completed, onRemoveTodo, onToggleCompleteTodo} ) => {
    return (
        <div className='view' key={id}>
            <input title={`${title}`} className='toggle' type='checkbox' checked={completed} onChange={(event) => onToggleCompleteTodo({id, completed: event.target.checked})} />
            <label rel='inputCheck'>{title}</label>
            <button type='button' title='destroy' name='destroy' className='destroy' onClick={() => onRemoveTodo({id})} />
        </div>
    );
};