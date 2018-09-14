import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  mainColor = ''
  main = ''

  constructor() { }

  ngOnInit() {
  }

  but(){
    this.mainColor = 'borda'
    this.main = "cursor: crosshair"
  }

}
