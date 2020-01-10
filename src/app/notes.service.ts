import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Array<Note>> {
    return  this.http.get<Array<Note>>('http://localhost:3000/notes');
  }

  addNote(note: Note): Observable<Note> {
    console.log('invoked..title:' + note);
    return this.http.post<Note>('http://localhost:3000/notes', note, httpOptions);
  }

}
