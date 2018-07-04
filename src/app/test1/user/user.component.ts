import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl : './user.component.html',
    styleUrls: ['./user.component.css']

})

export class UserComponent{
    userName:string;
    setUserName(userName:string){
        this.userName = userName;
    }

}