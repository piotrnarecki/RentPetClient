import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: "Home - Rent-Pet" },
    { path: 'catalog', component: CatalogComponent, title: "Cat-a-log - Rent-Pet" },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];;
