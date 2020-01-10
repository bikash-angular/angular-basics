import { Component, OnInit } from '@angular/core';
import { NotesService } from './notes.service';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  errMessage: string;
  notes: Note[];

  constructor(private service: NotesService) { }

  ngOnInit(): void {
    this.service.getNotes().subscribe(notes => { this.notes = notes; },
      error => { this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found'; });
  }

  addNote(title: string, text: string): void {
    const note = { title: title, text: text };

    if (text === '' || title === '') {
      this.errMessage = 'Title and Text both are required fields';
      return;
    }
    this.service.addNote(note).subscribe(
      data => { this.notes.push(note); },
      error => {
      this.errMessage = 'Http failure response for http://localhost:3000/notes: 404 Not Found';
        console.log('failure');
      });
  }
}

