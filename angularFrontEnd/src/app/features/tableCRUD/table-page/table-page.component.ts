import { Component, OnInit, ViewChild } from '@angular/core';
import { SimpleTableComponent } from '../../../shared/table_custom/simple-table/simple-table.component';
import { SimpleRowEditorComponent } from "../../../shared/table_custom/simple-row-editor/simple-row-editor.component";
import { CommonModule } from '@angular/common';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { FgasServiceService } from '../../fgas/services/fgas-service.service';
import { FGAS_FILLABLE_COLUMNS, SEARCH_COLUMNS} from '../../fgas/models/models/FgasModel';

@Component({
    selector: 'app-table-page',
    standalone: true,
    imports: [SimpleTableComponent, SimpleRowEditorComponent, SimpleRowEditorComponent, CommonModule, MatSidenav, MatSidenavContainer, MatSidenavContent],
    templateUrl: './table-page.component.html',
    styleUrl: './table-page.component.css'
})
export class TablePageComponent implements OnInit {

    constructor(private fgasService: FgasServiceService){

    }

    ngOnInit(): void {
        this.loadData();
    }

    listaColonne =  FGAS_FILLABLE_COLUMNS;
    listaSearch = SEARCH_COLUMNS;

    data : any= []


    editRow: any;

    onEditRow(row: any) {
        console.log(row);
        this.editRow = row;
        this.sideRowEdit.open()
    }

    @ViewChild('sideRowEdit') sideRowEdit!: MatSidenav;

    onToggleSideEdit(){
        this.sideRowEdit.open()
    }

    loadData(): void {
        this.fgasService.getData().subscribe(response => {
          this.data = response; // Salva i dati ricevuti
          console.log('Data loaded:', this.data);
        });
      }

}
