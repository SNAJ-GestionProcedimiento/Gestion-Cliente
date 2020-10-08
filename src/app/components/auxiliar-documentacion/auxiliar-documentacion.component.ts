import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-auxiliar-documentacion',
  templateUrl: './auxiliar-documentacion.component.html',
  styleUrls: ['./auxiliar-documentacion.component.css']
})
export class AuxiliarDocumentacionComponent implements OnInit, DoCheck {
  public titulo: String;
  

  constructor() {
    this.titulo = "Documentacion";
   }

  ngOnInit(): void {


  }

  ngDoCheck(): void{
    //Se ejecuta cuando ocurra algún cambio en el componente
  }

  generarRecibido(){
    alert("Generando recibido...");
  }

  adicionarDocumentos(){
    console.log("Adicionando documentos...");
  }

 





}
