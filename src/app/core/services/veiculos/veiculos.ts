import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculo } from "../../../models/veiculo";

@Injectable({
    providedIn: 'root'
})
export class VeiculoService {

    private apiUrl = "http://localhost:8080/api/veiculos"

    constructor (private http: HttpClient){}

    listarVeiculos(): Observable <Veiculo[]> {
        return this.http.get<Veiculo[]>(this.apiUrl);
    }

}