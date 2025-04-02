import { Task } from "./task"

export interface ILogger {

    logSortedList(tasks: Task[]): void;
    
    logFilteredList(tasks: Task[]): void;
}
