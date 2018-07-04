import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styles: [`
    
    .online:before{
        content:'GO';
        display: inline-block;
        background-color: orange;
        text-align: center;
        padding: 0 4px 0 4px;
    }
    .offline:before{
        content:'NA';
        display: inline-block;
        background-color: black;
        color: white;
        text-align: center;
        padding: 0 4px 0 4px;
    }

    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    constructor() {
        this.serverId = Math.floor(Math.random() * 10);
        this.serverStatus = this.serverId > 5 ? 'online' : 'offline';
    }
    getServerStatus(): string {

        return this.serverStatus
    }
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}