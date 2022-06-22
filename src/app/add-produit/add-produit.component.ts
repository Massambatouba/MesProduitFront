import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitsComponent } from '../produits/produits.component';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  message?: string;

  constructor( private produitService : ProduitService) { }

  ngOnInit(): void {

  }
  addProduit(){
    this.produitService.ajouterProduit(this.newProduit)
    this.message = "Produit" + this.newProduit.nomProduit + "ajoute avec susccé!"
  }

}
