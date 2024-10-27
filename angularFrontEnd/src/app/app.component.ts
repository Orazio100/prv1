import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FoodServiceService } from './food-service.service';
import { LayoutComponent } from './frame/layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  foods: string[] = [];

  constructor(public fs: FoodServiceService) {

  }

  // ngOnInit(): void {


  //   console.log("dentro");
  //   this.fs.getFoods().subscribe(
  //     (data: string[]) => {
  //       this.foods = data;  // Assegna i dati ricevuti alla variabile foods
  //     }
  //   );
  // }


  // title = 'angularFrontEnd';
  // // foods: any[] = [
  // //   {value: 'steak-0', viewValue: 'Steak'},
  // //   {value: 'pizza-1', viewValue: 'Pizza'},
  // //   {value: 'tacos-2', viewValue: 'Tacos'},
  // // ];



}
