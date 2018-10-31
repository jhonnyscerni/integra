import { Produto } from './../../../../models/produto';
import { ProdutoService } from './../../../../services/produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  ELEMENT_DATA: Produto[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private produtoServive: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoServive.getProdutos()
    .subscribe((data: any) => {
      console.log(data);
      this.ELEMENT_DATA = data._embedded.product as Produto[];
    });
  }

}
