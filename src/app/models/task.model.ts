import { Xrm } from "./xrm.model";

export interface Task {
  taskId: number;
  taskName: string;
  taskDescription: string;
  taskCompleted: boolean;
  xrm: Xrm;
}