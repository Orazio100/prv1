import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatSidenavContent } from '@angular/material/sidenav';
import { MatList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule,MatIcon, MatSidenav, MatSidenavContainer, MatSidenavContent, MatList, MatListItem, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})


export class LayoutComponent {
  @ViewChild('sideNavRef') sideNavRef!: MatSidenav;


  onToggleSideNav(){
    this.sideNavRef.toggle()
  }

  closeSideBar(){
    this.sideNavRef.close();
  }

}
