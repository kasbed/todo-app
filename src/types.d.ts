import { TODO_FILTERS } from "./consts";

export interface ITodo {
    id : string,
    title: string,
    completed: boolean,
}

export type TodoId = Pick<ITodo, 'id'>;
export type TodoTitle = Pick<ITodo, 'title'>;

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];