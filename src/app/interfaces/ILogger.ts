import { Task } from "./task"

export interface ILogger {

    logList(tasks: Task[]): void;
}
