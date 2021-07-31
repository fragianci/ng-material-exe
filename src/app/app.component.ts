import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

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
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  

  constructor(
    private snackbar: MatSnackBar,
    private dialog: MatDialog
    ) { }

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

  openDialog(){
    let dialogRef = this.dialog.open(
      DialogExampleComponent, {data: {name: "Francesco"}});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
