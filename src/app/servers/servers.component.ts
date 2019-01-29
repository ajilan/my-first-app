import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`p {
    color: blue
  }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created'
  constructor() { 
    setTimeout(() => {
    this.allowNewServer = true;  
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created';
  }
}





