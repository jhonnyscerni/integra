import { Component, OnInit } from '@angular/core';
import { Loja } from 'app/models/loja';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';
import { SquidFacilService } from 'app/services/squid-facil.service';

export interface Catalogo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-loja-edit',
  templateUrl: './loja-edit.component.html',
  styleUrls: ['./loja-edit.component.scss']
})
export class LojaEditComponent implements OnInit {

  loja: Loja = new Loja();
  access_token: any
  expires_in : any
  
  catalogos: Catalogo[] = [
    {value: 'squid', viewValue: 'Squid Fácil'}
  ];

  constructor(
    private sSquidFacil: SquidFacilService,
    private title: Title,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.title.setTitle('Loja');
    this.getDadosToken();
  }

  onSubmit() {

    this.sSquidFacil.gerarToken().subscribe(loja => {
      console.log(loja);
      localStorage.setItem('access_token', loja.access_token);
      localStorage.setItem('expires_in', JSON.stringify(loja.expires_in.valueOf()));
      this.getDadosToken();
     // this.snackBar.open(`${this.loja} salvo com sucesso!`, '', { duration: 10000 });
    });

  }

  getDadosToken() {
     this.access_token = this.sSquidFacil.token
     this.expires_in = this.sSquidFacil.expires_in
  }

}
