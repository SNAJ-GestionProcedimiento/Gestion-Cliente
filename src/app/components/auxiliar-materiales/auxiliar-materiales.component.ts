import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auxiliar-materiales',
  templateUrl: './auxiliar-materiales.component.html',
  styleUrls: ['./auxiliar-materiales.component.css']
})
export class AuxiliarMaterialesComponent implements OnInit {
  public titulo: String;
  

  constructor() { 
    this.titulo = "Materiales";
  }

  ngOnInit(): void {
  }

}
