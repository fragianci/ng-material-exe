import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-material-exe';
  nots = 3;
  showSpinner = false;
  opened = false;
  selectedValue="";
  options = ['Angular', 'React', 'Vue'];

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    }, 2000)
  }

  log(state){
    console.log(state);
  }
}
