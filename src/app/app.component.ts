import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vegitaMods';
  ishidden = false;
  constructor(private route:Router){}

  bdg(){
    this.ishidden = true;
    this.route.navigate(['/bdgGame']);
    
  }
  tiranga(){
    this.ishidden = true;
    this.route.navigate(['/Tiranga']);
    
  }
}
