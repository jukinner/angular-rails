import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
  {
    title: "My first doc",
    description: 'asdfasdfasdf asdf asdf',
    file_url: 'http://google.com',
    updated_at: '03/22/18',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
  },
  {
    title: "My second doc",
    description: 'asdfasdfasdf asdf asdf',
    file_url: 'http://google.com',
    updated_at: '03/22/18',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
  },
   {
    title: "My third doc",
    description: 'asdfasdfasdf asdf asdf',
    file_url: 'http://google.com',
    updated_at: '03/22/18',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}