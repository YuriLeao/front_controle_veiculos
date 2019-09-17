import { POITempo } from './../../models/POITempo.model';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  poiTempos = new POITempo();
  placa: string;
  data: string;
  error: any;
  constructor(private apiService: ApiService) {
    this.getter();
   }

  ngOnInit() {
  }
  public inserirPlaca(placa: string) {
    this.placa = placa;
  }

  public inserirData(data: string) {
    this.data = data;
  }
  getter() {
    this.apiService.getPOITempo().subscribe(
      (data: POITempo) => {
        this.poiTempos = data;
        console.log(data);
        console.log(this.poiTempos);
      }, (error: any) => {
        this.error = error;
        console.error('Erro', error);
      }
    );
  }
  public buscar() {
    this.apiService.getPOITempoParam(this.placa, this.data).subscribe(
      (data: POITempo) => {
        this.poiTempos = data;
        console.log(data);
        console.log(this.poiTempos);
      }, (error: any) => {
        this.error = error;
        console.error('Erro', error);
      }
    );
  }
  headElements: string[] = ['Ponto', 'Placa', 'Data Posição', 'Tempo em segundos', 'Lat Ponto', 'Long Ponto', 'Lat Veiculo', 'Long Veiculo', 'Raio', 'Distancia'];
}
