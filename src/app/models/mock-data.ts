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
        },
        notes: "# Task 1 - Project 1\n\nThis is just for testing\n\n```html\n<h1>I'm an HTML example for a test</h1>\n```\n\n* Cool story bro"
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
        },
        notes: "# Task 2 - Project 1\n\nAnother test for a task\n\n```css\ndisplay: grid;\ngrid-template-columns: 1fr 1fr\n```\n\n## Heading 2\n\n* Just a test\n  * with a subbullet"
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
        },
        notes: "# Test 3 - Project 1\n\nStuff\n\n## Heading 2\n\n## Heading 3\n\n#### Heading 4"
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
        },
        notes: "# Project 2 Task 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros nibh, maximus in tempor sed, cursus eu tortor. Aliquam lectus arcu, vulputate at augue nec, iaculis laoreet augue. Donec lobortis est at tellus mollis ultricies. Vivamus ultricies consectetur placerat. Aenean libero leo, consequat vel odio eget, pretium posuere elit. Nam id tempor enim. Nullam sed diam nec turpis luctus ultrices interdum id purus. Fusce quis lacinia tellus, quis tincidunt libero. \n\n"
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
        },
        notes: "# Project 2 Task 2\n\nAenean sed venenatis dolor. Proin vitae massa pellentesque magna finibus sollicitudin quis a mauris. Mauris porttitor imperdiet rhoncus. Sed leo nibh, luctus nec tellus nec\n\n## Heading 2\n\nlobortis elementum ex. Pellentesque ornare mi sed gravida egestas. Aliquam nec nisi in dui laoreet pretium. Morbi luctus est sed lacus tempus, eget blandit sapien eleifend. Quisque et lectus orci. \n\n"
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
        },
        notes: "# Project 2 Task 3\n\nAenean sed venenatis dolor. Proin vitae massa pellentesque magna finibus sollicitudin quis a mauris. Mauris porttitor imperdiet rhoncus. Sed leo nibh, luctus nec tellus nec\n\n## Heading 2\n\nlobortis elementum ex. Pellentesque ornare mi sed gravida egestas. Aliquam nec nisi in dui laoreet pretium. Morbi luctus est sed lacus tempus, eget blandit sapien eleifend. Quisque et lectus orci. \n\n### Heading 3\n\nIn hac habitasse platea dictumst. Ut sapien leo, finibus in placerat id, scelerisque at ligula. Sed risus ligula, congue et placerat eget, consectetur id diam. Class aptent taciti sociosqu ad litora\n\n"
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
        },
        notes: "#### JavaScript\n```javascript\nconst y = 10\nlet u = 10;\n\nfunction add() {\n  return y + u;\n}\n```\n\n"
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
        },
        notes: "# Notes Pending for task 2\n\n"
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
        },
        notes: "# Notes Pending for task 3\n\n"
      }
    ]
  }
];