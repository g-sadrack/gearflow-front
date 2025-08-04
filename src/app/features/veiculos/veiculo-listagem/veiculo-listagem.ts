import { Component } from '@angular/core';
import { Veiculo } from '../../../models/veiculo';
import { VeiculoService } from '../../../core/services/veiculos/veiculos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-veiculo-listagem',
  imports: [],
  templateUrl: './veiculo-listagem.html',
  styleUrl: './veiculo-listagem.css'
})
export class VeiculoListagem {

  veiculos: Veiculo[] = [];

  constructor(
    private veiculoService: VeiculoService, 
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.veiculoService.listarVeiculos().subscribe((veiculo) =>{
      this.veiculos = veiculo;
    } )
  }

}
