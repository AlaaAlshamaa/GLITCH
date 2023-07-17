import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
 
/**
* Service to automate creation of JSON-LD Microdata.
*/
class scriptService {
 
constructor(
  @Inject(DOCUMENT) private _document: Document
) { }
 
/**
* Set JSON-LD Microdata on the Document Body.
*
* @param renderer2 The Angular Renderer
* @param data The data for the JSON-LD script
* @returns Void
*/
public setJsonLd(renderer2: Renderer2, data: any): void {
 
  let script = renderer2.createElement('script');
  script.type =  'text/javascript';
  script.text = `${JSON.stringify(data)}`;
  renderer2.appendChild(this._document.body, script);
}
}