import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  success_msg = true;



  contacts=[
    {
      'firstname':'ABC1',
      'lastname':'QWE1',
      contactId:1234
    },
    {
      'firstname':'ABC2',
      'lastname':'QWE2',
      contactId:1235
    },
    {
      'firstname':'ABC3',
      'lastname':'QWE3',
      contactId:1236
    },
    {
      'firstname':'ABC2',
      'lastname':'QWE2',
      contactId:1235
    },
    {
      'firstname':'ABC3',
      'lastname':'QWE3',
      contactId:1236
    },
    {
      'firstname':'ABC2',
      'lastname':'QWE2',
      contactId:1235
    },
    {
      'firstname':'ABC3',
      'lastname':'QWE3',
      contactId:1236
    },
    {
      'firstname':'ABC2',
      'lastname':'QWE2',
      contactId:1235
    },
    {
      'firstname':'ABC3',
      'lastname':'QWE3',
      contactId:1236
    }
  ]





}
