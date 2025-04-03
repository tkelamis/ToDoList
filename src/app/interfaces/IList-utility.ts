import { Task } from "./task";

export interface IListUtility {

    sortList(selection: string , listToFilter:Task[]):Task[];
    sortListByPriority(listToFilter: Task[]):Task[];
}
