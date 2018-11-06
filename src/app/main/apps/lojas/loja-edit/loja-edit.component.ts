import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Loja } from 'app/models/loja';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material';

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
  
  catalogos: Catalogo[] = [
    {value: 'squid', viewValue: 'Squid Fácil'}
  ];

  constructor(
    private oAuth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.title.setTitle('Loja');
  }

  onSubmit() {

    this.oAuth.login().subscribe(loja => {
      console.log(loja);
      localStorage.setItem('access_token', loja.access_token);
      localStorage.setItem('expires_in', JSON.stringify(loja.expires_in.valueOf()));
     // this.snackBar.open(`${this.loja} salvo com sucesso!`, '', { duration: 10000 });
    });

  }

}
