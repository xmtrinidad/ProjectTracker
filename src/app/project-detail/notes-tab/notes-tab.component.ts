import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.css']
})
export class NotesTabComponent implements OnInit, OnDestroy {
  wantsMarkdown = true;
  mdNotes: string;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService) { }

  ngOnInit() {
    // Change current notes on route change
    this.route.url.subscribe(url => {
      this.mdNotes = this.notesService.getCurrentNotes();
    });
  }

  onSaveClick() {
    this.notesService.saveNotes(this.mdNotes);
  }

  onClearClick() {
    this.mdNotes = '';
  }

  ngOnDestroy() {
    this.notesService.saveNotes(this.mdNotes);
  }

}
