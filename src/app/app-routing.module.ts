import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SelectionColorComponent } from './components/selection-color.component';


const appRoutes: Routes = [
  {path: 'colores/:page', component: SelectionColorComponent},
	{path: '', redirectTo:'/colores/', pathMatch: 'full' }
  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
