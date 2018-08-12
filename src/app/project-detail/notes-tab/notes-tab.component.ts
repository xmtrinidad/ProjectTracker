import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.css']
})
export class NotesTabComponent implements OnInit, OnDestroy {
  wantsMarkdown = true;
  mdNotes: string;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.mdNotes = this.notesService.currentNote;
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
