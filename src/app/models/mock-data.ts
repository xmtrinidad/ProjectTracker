import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'My Project 1',
    status: 'Not started',
    tasks: [
      {
        taskId: 0,
        taskName: 'Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskId: 1,
        taskName: 'Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
        taskId: 2,
        taskName: 'Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false
      }
    ]
  },
  {
    id: 1,
    name: 'My Project 2',
    status: 'Not started',
    tasks: [
      {
        taskId: 0,
        taskName: 'Project 2 - Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskId: 1,
        taskName: 'Project 2 - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
        taskId: 2,
        taskName: 'Project 2 -Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false
      }
    ]
  },
  {
    id: 2,
    name: 'My Project 3',
    status: 'Not started',
    tasks: [
      {
        taskId: 0,
        taskName: 'Three - Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskId: 1,
        taskName: 'Three - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
        taskId: 2,
        taskName: 'Three - Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false
      }
    ]
  }
];