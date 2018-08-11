import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-recent-tasks',
  templateUrl: './recent-tasks.component.html',
  styleUrls: ['./recent-tasks.component.css']
})
export class RecentTasksComponent implements OnInit {
  recentTasks: Task[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.recentTasks = this.projectService.getRecentTasks();
  }

}
