import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // references to the property 
  status: string = 'online';
  serverId: number = 15;
  serverName ='';

  getstatus(){
      return this.status;
  }

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      return this.allowNewServer = true;
    }, 3000);
   }

  ngOnInit(): void {
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event);
  }

}
