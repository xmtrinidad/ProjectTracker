import { Project } from './project.model';

export const PROJECTS: Project[] = [
  {
    name: 'My Project 1',
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
    name: 'My Project 2',
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
    name: 'My Project 3',
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