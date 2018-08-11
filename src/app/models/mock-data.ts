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
        taskCompleted: false,
        xrm: {
          description: 'For this task I am just giving a simple description for testing purposes',
          taskType: 'JavaScript Coding Task',
          status: 'Not Started',
          projected: {
            startDate: '8/11/2018',
            endDate: '8/31/2018',
            time: '10'
          },
          actual: {
            startDate: '8/12/2018',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 1,
        taskName: 'Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false,
        xrm: {
          description: 'Another testing description is displayed here',
          taskType: 'CSS Coding Task',
          status: 'In Progress',
          projected: {
            startDate: '8/11/2018',
            endDate: '8/12/2018',
            time: '3'
          },
          actual: {
            startDate: '8/12/2018',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 2,
        taskName: 'Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false,
        xrm: {
          description: 'Task 3 xrm description',
          taskType: 'HTML Coding Task',
          status: 'In Progress',
          projected: {
            startDate: '8/10/2018',
            endDate: '8/11/2018',
            time: '5'
          },
          actual: {
            startDate: '8/10/2018',
            endDate: '8/11/2018',
            time: '5'
          }
        }
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
        taskCompleted: false,
        xrm: {
          description: 'Task 2 xrm description',
          taskType: 'Documentation Coding Task',
          status: 'Not Started',
          projected: {
            startDate: '',
            endDate: '',
            time: ''
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 1,
        taskName: 'Project 2 - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false,
        xrm: {
          description: 'Task 2 xrm description for project 2',
          taskType: 'Testing Task',
          status: 'Not Started',
          projected: {
            startDate: '8/11/2018',
            endDate: '8/18/2018',
            time: '15'
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 2,
        taskName: 'Project 2 -Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false,
        xrm: {
          description: 'Task 3 xrm description for project 2',
          taskType: 'JavaScript Coding Task',
          status: 'Not Started',
          projected: {
            startDate: '8/16/2018',
            endDate: '8/20/2018',
            time: '10'
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
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
        taskCompleted: false,
        xrm: {
          description: 'Project 3, task 1 description',
          taskType: 'HTML Coding Task',
          status: 'In Progress',
          projected: {
            startDate: '8/10/2018',
            endDate: '8/11/2018',
            time: '5'
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 1,
        taskName: 'Three - Task 2',
        taskDescription: 'This is a description for task 2',
        taskCompleted: false,
        xrm: {
          description: 'Project 3 task 2, just some text to check for changes',
          taskType: 'CSS Coding Task',
          status: 'Not Started',
          projected: {
            startDate: '8/15/2018',
            endDate: '8/16/2018',
            time: '7'
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
      },
      {
        taskId: 2,
        taskName: 'Three - Task 3',
        taskDescription: 'This is a description for task 3',
        taskCompleted: false,
        xrm: {
          description: 'Project 3, Task 3',
          taskType: 'Random Stuff Task',
          status: 'On Hold',
          projected: {
            startDate: '8/20/2018',
            endDate: '8/23/2018',
            time: '15'
          },
          actual: {
            startDate: '',
            endDate: '',
            time: ''
          }
        }
      }
    ]
  }
];