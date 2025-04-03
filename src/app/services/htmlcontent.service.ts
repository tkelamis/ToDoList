import { Injectable } from '@angular/core';
import { IHTMLContent } from '../interfaces/IHTMLcontent';

@Injectable({
  providedIn: 'root'
})
export class HTMLContentService implements IHTMLContent {
  content: string = '';

  constructor() { }

  getHTMLContent(event: Event): string{
    const target = event.target as HTMLElement;

    if(!target || !target.dataset['name']){
      throw new Error("Invalid event target: Cannot extract HTML content.");
    }

    this.content = target.dataset['name'];

    return this.content;
  }
}
