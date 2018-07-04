import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created...";
  serverCreated = false;
  serverName = '';
  serverList = ['temp1','temp2'];

  constructor() { 
    console.log('construnctor');
    setTimeout(()=>{this.allowNewServer = true},2000);
  
  }

  ngOnInit() {
    console.log('ngOnInit - neo');
  
  }

  onCreateServer(){
    this.serverCreationStatus = `Server was created`;
    this.serverList.push(this.serverName);
    this.serverCreated = true;


  }
  // onUpdateServerName(event: Event){
  //   //console.log(event);
  //   this.serverName = (<HTMLInputElement>event.target).value;
  //   //console.log(this.serverName);
  // }
  


}
