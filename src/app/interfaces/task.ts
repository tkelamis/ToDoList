export interface Task {
    name:string;
    completed:boolean;
    cost: number;
    date: Date;
    completionPercentage: number;
    priority: TaskPriority,
    forReminder: boolean
}


export enum TaskPriority{
    High="High",
    Medium="Medium",
    Low="Low",
    Unknown="Unknown"
}