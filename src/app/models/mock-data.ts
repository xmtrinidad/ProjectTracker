import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'My Project 1',
    status: 'Not started',
    tasks: [
      {
        taskName: 'Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskName: 'Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
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
        taskName: 'Project 2 - Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskName: 'Project 2 - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
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
        taskName: 'Three - Task 1',
        taskDescription: 'This is a description for task 1',
        taskCompleted: false
      },
      {
        taskName: 'Three - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false
      },
      {
        taskName: 'Three - Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false
      }
    ]
  }
];