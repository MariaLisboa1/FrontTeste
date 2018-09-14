import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  mainColor = ''
  
  constructor() { }

  ngOnInit() {
  }

  but(){
    this.mainColor = 'borda'
    document.getElementById('cursor').style.cursor = "crosshair"

  //   $(document).ready(function(){
  //     $('[data-toggle="tooltip"]').tooltip();
  // });
  }


}
