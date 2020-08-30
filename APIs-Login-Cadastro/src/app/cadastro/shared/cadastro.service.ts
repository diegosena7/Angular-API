import { Cadastro } from './cadastro.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:8080/novoCadastro';

  postRecarga(request: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.API, request);
  }
}
