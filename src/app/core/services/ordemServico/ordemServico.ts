import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class OrdemServico {
  private apiUrl = 'http://localhost:8080/api/ordens-servico';

  constructor(private http: HttpClient) {}


}
