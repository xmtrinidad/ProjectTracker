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

  /**
   * Convert date into a format that can be used with the date value
   * in the HTML template
   * Passed in: MM/DD/YYYY
   * @param theDate - the date to process
   * @return date formatted in YYYY-MM-DD
   */
  convertDate(theDate: string) {
    if (theDate === '') {
      return;
    }
    const dateSplit = theDate.split('/');
    return `${dateSplit[2]}-${dateSplit[0]}-${dateSplit[1]}`;
  }

}
