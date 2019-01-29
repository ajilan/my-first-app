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
  serverCreationStatus = 'no server was created';
  serverName = 'test server';
  serverCreated = false;
  constructor() { 
    setTimeout(() => {
    this.allowNewServer = true;  
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer(){
    this.serverCreationStatus = `server was created ${this.serverName}`;
    this.serverCreated = true;
  }

  onUpdateServerName( event : Event) {
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}








