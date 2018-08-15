import { Injectable } from '@angular/core';
import { ProjectService } from './project.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  currentNote = '';
  constructor(private projectService: ProjectService) { }

  saveNotes(notes: string) {
    this.currentNote = notes;
  }

  setCurrentNotes(task: Task) {
    this.currentNote = task.notes;
  }

  getCurrentNotes() {
    return this.currentNote;
  }


}
