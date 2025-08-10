import { Component } from '@angular/core';
import { Veiculo } from '../../../models/veiculo';
import { VeiculoService } from '../../../core/services/veiculos/veiculos';
import { SearchService } from '../../../shared/services/search/search-service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-veiculo-listagem',
  imports: [],
  templateUrl: './veiculo-listagem.html',
  styleUrl: './veiculo-listagem.css'
})
export class VeiculoListagem {

  veiculos: Veiculo[] = [];
  veiculosFiltrados: any[] = [];

  constructor(
    private veiculoService: VeiculoService,
    private search: SearchService,
  ) { }

  ngOnInit() {
    this.veiculoService.listarVeiculos().subscribe((veiculo) => {
      this.veiculos = veiculo;
      this.veiculosFiltrados = this.veiculos;
    });

    this.search.term$
    .pipe(debounceTime(200))
    .subscribe(term => this.filter(term));

  }

  ngOnDestroy(): void {
    this.search.setTerm('');
  }

  filter(term: string): void {
    const t = term.trim().toLowerCase();

    if (!t) {
      this.veiculosFiltrados = this.veiculos;
      return;
    }
    this.veiculosFiltrados = this.veiculos.filter(veiculo =>
      veiculo.placa.toLowerCase().includes(t) ||
      veiculo.marca.toLowerCase().includes(t) ||
      veiculo.modelo.toLowerCase().includes(t)
    )
  }

}
