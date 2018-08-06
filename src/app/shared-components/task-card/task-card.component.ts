import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {
  @Input() task: Task;
  projectId: number;
  
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectId = this.projectService.project.id;
  }

}
