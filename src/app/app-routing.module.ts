import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './services/update-produit/update-produit.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent},
  { path: 'add-produit', component: AddProduitComponent},
  { path: "" ,redirectTo: "produits", pathMatch: "full"},
  { path: 'updateProduit/:id', component: UpdateProduitComponent},

];
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
