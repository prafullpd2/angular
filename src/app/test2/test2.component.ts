import { Component, NgModule } from "@angular/core";

@Component({
    selector:'app-test2',
    templateUrl:'./test2.component.html',
    styleUrls:['./test2.component.css']
})
@NgModule({
    declarations: [
      
    ],
    imports: [
    ],
    providers: [],
    bootstrap: [Test2Component]
  })

export class Test2Component{
        items = ['name1'];
        addItem(){
            this.items.push('...');
        }
}