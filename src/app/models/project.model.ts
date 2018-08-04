import { Task } from "./task.model";

export interface Project {
  id: number;
  name: string;
  status: string;
  tasks: Task[];
}