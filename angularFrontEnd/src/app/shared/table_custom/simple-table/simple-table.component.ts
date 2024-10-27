import { Component, OnInit, Input, Output, OnChanges, EventEmitter, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-simple-table',
  standalone: true,
  imports: [CommonModule,MatTableModule, MatPaginator, MatSortModule, ReactiveFormsModule, MatInputModule, MatIcon, MatCheckbox],
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.css'
})



export class SimpleTableComponent implements OnInit, OnChanges {

  @Input() dati : any[] = [];
  @Input() colonne : Array<string> = [];
  @Input() isColonnaCheckEnabled : boolean = false;

  @Input() searchFields : any[] = [];
  @Input() filterMissingColumn : string = '';

  @Output() onEditRow = new EventEmitter<any>();  

  selection: SelectionModel<any>;
  dataSource: MatTableDataSource<any>;
  displayedColumns:  Array<string>= [];
  searchElementList!: FormGroup;
  
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource<any>(this.dati);
    this.selection = new SelectionModel<any>(true, []);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges() {
    //this.selection.clear();
    if(this.isColonnaCheckEnabled){
      this.displayedColumns = (['checkColonna'] as Array<string>).concat(this.colonne);
    }else{
      this.displayedColumns = this.colonne;
    }
    this.dataSource.data = this.dati;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.sortingDataAccessor = (data: any, sortHeaderId: string): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }
    
      return data[sortHeaderId];
    };

    this.initSearchElement();

    console.log(this.dataSource);
  }

  ngOnInit() {
  }


  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  // getSelectedItems() {
  //   return this.selection.selected;
  // }

  onSelectRow(row : any){
    this.onEditRow.emit(row)
  }


  onSelectMissingFilter(checkEvent : boolean){

    
    this.applyFilterMissing(checkEvent, this.filterMissingColumn);

    //this.dataSource.data = this.dati.filter(item => !item.name);
  }


  applyFilterMissing(isCheckEnabled: boolean, field: string) { 
    if (isCheckEnabled) {
        this.dataSource.filterPredicate = (data: any) => {
            return data[field] === null || String(data[field]).trim() === '';
        };
        // Attiva il filtro impostando un valore qualsiasi
        this.dataSource.filter = 'filter';
    } else {
        // Se il filtro non è attivo, mostra tutte le righe
        this.dataSource.filter = ''; // Puoi anche voler resettare filterPredicate qui se necessario
    }
}

  
  private initSearchElement(){
    let fieldsForm: { [key: string]: any } = {};
    for(let elem of this.searchFields){
      fieldsForm[elem] =  '';
    }
    this.searchElementList = this.formBuilder.group(fieldsForm);

    console.log(this.searchElementList)

    for(let elem of this.searchFields){
      this.searchElementList.get(elem)!.valueChanges.subscribe((value: string) => {
        this.applyFilter(value,elem);
      });
    }

  }


  applyFilter(filterValue: string, columnName: string) {
    this.dataSource.filterPredicate = ((data: any, filter: string) => {
      const fieldValue = data[columnName] ? String(data[columnName]).toLowerCase() : ''; 
      return fieldValue.includes(filter.toLowerCase());
    });
  
    // Imposta il valore del filtro
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

}
