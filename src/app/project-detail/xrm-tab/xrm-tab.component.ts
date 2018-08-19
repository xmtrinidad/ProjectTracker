import { Component, OnInit } from '@angular/core';
import { Xrm } from '../../models/xrm.model';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../services/project.service';
import { NotesService } from '../../services/notes.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-xrm-tab',
  templateUrl: './xrm-tab.component.html',
  styleUrls: ['./xrm-tab.component.css']
})
export class XrmTabComponent implements OnInit {
  task: Task;
  xrm: Xrm;
  wantsToEdit = false;
  constructor(
    private notesService: NotesService,
    private projectService: ProjectService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Listen for route changes
    this.route.url.subscribe(url =>{
      const selectedTaskId = +this.route.snapshot.paramMap.get('taskId');
      this.task = this.projectService.getTask(selectedTaskId);
      this.notesService.setCurrentNotes(this.task);
      this.xrm = this.task.xrm;
    });
  }

  onCompleteTaskClick() {
    this.projectService.setCompletedTask(this.task);
  }

  onStartTaskClick() {
    this.projectService.setStartTask(this.task);
  }

  onDeleteTaskClick() {
    console.log('Task delete button clicked.  Do some stuff');
  }

  onEditSaveClick() {
    this.wantsToEdit = false;
    console.log('Task eddit save button clicked. Do some stuff');
  }

}
