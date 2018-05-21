import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.css']
})
export class TheatreComponent implements OnInit {
  display: boolean = false;
  constructor() { }

  ngOnInit() {
  }
   showDialog() {
        this.display = true;
    }
    hideDialog() {
        this.display = false;
    }

}
