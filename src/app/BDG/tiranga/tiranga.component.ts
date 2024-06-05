import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiranga',
  templateUrl: './tiranga.component.html',
  styleUrls: ['./tiranga.component.css']
})
export class TirangaComponent implements OnInit {

  val1:number = 0;
  val2:number = 0;
  mult:number =0;
  ans:number =0;
  result:string = "";
  ishidden:boolean = true;

  ngOnInit(): void {
  }

  get(one:any){
    // this.val1 = +one;
    // this.val2 = +two;

    this.val2 = +one % 10;
    one = Math.floor(one / 10);
    this.val1 = +one % 10;

    this.mult = this.val1 * this.val2;
    this.ans = this.mult / this.val2;
    if(this.ans <=4){
      this.result = "SMALL";
    }
    else{
      this.result = "BIG";
    }
    this.ishidden = false;

    
  }

}
