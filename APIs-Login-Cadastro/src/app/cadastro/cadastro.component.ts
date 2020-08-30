import { Cadastro } from './shared/cadastro.model';
import { CadastroService } from './shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  request: Cadastro = {
    nmCliente: '',
    nrCpf: '',
    dsEmail: '',
    pwCliente: ''
  }

  constructor(private cadastroService: CadastroService) { }

  registrar(): void {
    this.cadastroService.postRecarga(this.request).subscribe();
    alert("Cliente registrado com sucesso!")
  }

  ngOnInit(): void {
  }

}
