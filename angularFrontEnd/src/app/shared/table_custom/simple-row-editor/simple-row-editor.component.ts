import { Component, EventEmitter, input, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { CommonModule } from '@angular/common';


import {MatInputModule} from '@angular/material/input';




@Component({
  selector: 'app-simple-row-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './simple-row-editor.component.html',
  styleUrl: './simple-row-editor.component.css'
})
export class SimpleRowEditorComponent implements OnInit, OnChanges{
  @Input() rowData!:  { [key: string]: any };
  @Input() editableFieldsName : Array<string> = [];

  formElementList!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshData();
  }

  ngOnInit(): void {
    this.refreshData();
  }

  private refreshData(){
    let fieldsForm: { [key: string]: any } = {};
    for(let elem of this.editableFieldsName){
      fieldsForm[elem] =  this.rowData[elem];
    }

    this.formElementList = this.formBuilder.group(fieldsForm);
  }
  

}
