import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-material-exe';
  nots = 3;
  showSpinner = false;
  opened = false;
  selectedValue="";
  options: string[] = ['Angular', 'React', 'Vue'];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  minDate=new Date();
  maxDate=new Date(2021, 7, 31);

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    }, 2000)
  }

  log(state){
    console.log(state);
  }

  displayFn(subject){
    return subject ? subject.name : undefined;
  }

  private _filter(value: string): string[]{
    const filterValue = value.toLowerCase();
    return this.options.
      filter(option => option.toLowerCase().includes(filterValue));
  }

  dayFilter(date){
    const day = date.getDay();
    return day != 0 && day != 6;
  }

  openSnackbar(message: string, action: string){
    let snackbarRef = this.snackbar.open(message, action, {duration: 2000});

    snackbarRef.afterDismissed().subscribe(()=>{
      console.log('The snackbar was dismissed');
    })
    snackbarRef.onAction().subscribe(()=>{
      console.log('The snackbar action was triggered')
    })
  }

  openCustomSnackBar(){
    this.snackbar.openFromComponent(CustomSnackbarComponent, {duration: 2000});
  }
}
