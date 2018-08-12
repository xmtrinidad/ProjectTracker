import { Component, OnInit } from '@angular/core';
import { Xrm } from '../../models/xrm.model';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-xrm-tab',
  templateUrl: './xrm-tab.component.html',
  styleUrls: ['./xrm-tab.component.css']
})
export class XrmTabComponent implements OnInit {
  xrm: Xrm;
  wantsToEdit = false;
  constructor(
    private projectService: ProjectService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Listen for route changes
    this.route.url.subscribe(url =>{
      const selectedTaskId = +this.route.snapshot.paramMap.get('taskId');
      const task = this.projectService.getTaskXrm(selectedTaskId);
      this.xrm = task.xrm;
    });
  }

  onCompleteTaskClick() {
    console.log('Task complete button clicked.  Do some stuff');
  }

  onDeleteTaskClick() {
    console.log('Task delete button clicked.  Do some stuff');
  }

  onEditSaveClick() {
    this.wantsToEdit = false;
    console.log('Task eddit save button clicked. Do some stuff');
  }

}
