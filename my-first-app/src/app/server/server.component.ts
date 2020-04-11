import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    id: number = 10;
    private status: string = 'offline';
    userName = "";

    getStatus(){
        return this.status;
    }

    resetUser(){
        this.userName = "";
    }
}