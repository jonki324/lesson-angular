import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  result: string = "足し算";
  text1: string;
  text2: string;
  addAndShow() {
    let forResult: string = "数値を入力";
    let int1: number;
    let int2: number;
    int1 = Number(this.text1);
    int2 = Number(this.text2);
    if (!Number.isNaN(int1) && !Number.isNaN(int2)) {
      forResult = `計算結果: ${int1 + int2}`;
    }
    this.result = forResult;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
