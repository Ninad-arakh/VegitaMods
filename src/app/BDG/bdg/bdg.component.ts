import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdg',
  templateUrl: './bdg.component.html',
  styleUrls: ['./bdg.component.css']
})
export class BdgComponent implements OnInit {

  val1!: number;
  val2!: number;
  val3!: number;
  val4!: number;
  sum: number = 0;
  sum2: number = 0;
  temp1: number = 0;
  temp2: number = 0;
  result: string = "Please fill above fields first!!";
  val1Col: string = "";
  sumCol: string = "";
  ishidden:boolean = true;

  ngOnInit(): void {

  }

  get(val1: any) {
    // this.val1 = +val1;
    // this.val2 = +val2;
    // this.val3 = +val3;
    // this.val4 = +val4;

  /*  this.val4 = val1 % 10;
      val1 = val1 / 10;
      this.val3 = val1 % 10;
      val1 = val1 / 10;
      this.val2 = val1 % 10;
      val1 = val1 / 10;
      this.val1 = val1 % 10;  */

      this.val4 = val1 % 10;
      val1 = Math.floor(val1 / 10);
      this.val3 = val1 % 10;
      val1 = Math.floor(val1 / 10);
      this.val2 = val1 % 10;
      val1 = Math.floor(val1 / 10);
      this.val1 = val1 % 10;

     

    this.sum = this.val1 + this.val2 + this.val3 + this.val4;
    this.sum2 = this.sum;

    if (this.val1 == 1 || this.val1 == 3 || this.val1 == 5 || this.val1 == 7 || this.val1 == 9) {
      this.val1Col = "green";
    }
    if (this.val1 == 0 || this.val1 == 2 || this.val1 == 4 || this.val1 == 6 || this.val1 == 8) {
      this.val1Col = "red";
    }

    while (this.sum > 9) {
      this.temp1 = this.sum % 10;
      this.sum = Math.floor(this.sum / 10);
      this.temp2 = this.sum;

      this.sum = this.temp1 + this.temp2;
    }

    if (this.sum == 1 || this.sum == 3 || this.sum == 5 || this.sum == 7 || this.sum == 9) {
      this.sumCol = "green";
    }
    if (this.sum == 0 || this.sum == 2 || this.sum == 4 || this.sum == 6 || this.sum == 8) {
      this.sumCol = "red";
    }

    if (this.sum < 5) {
      if (this.val1Col == this.sumCol) {
        this.result = "SMALL";
      }
      else {
        this.result = "BIG";
      }
    }

    if (this.sum > 4) {
      if (this.val1Col == this.sumCol) {
        this.result = "BIG";
      }
      else {
        this.result = "SMALL";
      }
      console.log(this.sum);

    }
    this.ishidden= false;
  }
}
