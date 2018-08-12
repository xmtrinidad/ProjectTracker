import { Component, OnInit, Input } from '@angular/core';
import { Xrm } from '../../../models/xrm.model';

@Component({
  selector: 'app-xrm-view',
  templateUrl: './xrm-view.component.html',
  styleUrls: ['./xrm-view.component.css']
})
export class XrmViewComponent implements OnInit {
  @Input() xrm: Xrm;
  constructor() { }

  ngOnInit() {
  }

}
