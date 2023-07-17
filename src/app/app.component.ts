import { Component } from '@angular/core';
declare const disFun:any;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  ngOnInit(): void {
   // disFun();
  }

  title = 'my-first-app';
  name = 'ooooo';

  loadedFeature = '';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }


}
