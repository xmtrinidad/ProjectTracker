import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  currentNote = '';
  constructor() { }

  saveNotes(notes: string) {
    this.currentNote = notes;
  }
}
