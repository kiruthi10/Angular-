import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {

    // references to the property 
    status: string = 'online';
    serverId: number = 15;

    getstatus(){
        return this.status;
    }
}