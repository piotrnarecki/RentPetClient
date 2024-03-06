import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HomeComponent, HeaderComponent,FooterComponent,CatalogComponent,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RentPet';
}
