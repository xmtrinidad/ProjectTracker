import { Component, OnInit, Input } from '@angular/core';
import { Xrm } from '../../../models/xrm.model';

@Component({
  selector: 'app-xrm-edit',
  templateUrl: './xrm-edit.component.html',
  styleUrls: ['./xrm-edit.component.css']
})
export class XrmEditComponent implements OnInit {
  @Input() xrm: Xrm;
  constructor() { }

  ngOnInit() {
  }

}
