import { Component, NgModule } from "@angular/core";
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'app-test1',
    templateUrl : './test1.component.html',
    styleUrls: ['./test1.component.css']

})
@NgModule({
    declarations: [
      UserComponent
    ],
    imports: [
    ],
    providers: [],
    bootstrap: [Test1Component]
  })

export class Test1Component{
    username:string = "";
    addUser(userName:string){
        console.log(userName);
        this.username = '';
    }

}