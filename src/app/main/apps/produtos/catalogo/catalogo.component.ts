import { Produto } from './../../../../models/produto';
import { ProdutoService } from './../../../../services/produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Page } from '../../../../models/page';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  private products: Array<any> = []
  private page : Page;

  constructor(private produtoServive: ProdutoService) { }

  ngOnInit() {
    this.pageProducts(1, 60);
  }

  pageProducts(page, size){
    this.produtoServive.getProdutos(page, size).subscribe((res:any) => {
      this.page = res
      this.products =  res._embedded.product as Produto[];
      this.page.totalPages = res.page_count
      this.page.size = res.page_size
      this.page.number = res.page
      console.log(this.page);
    });
  }

  changePage(event){
    this.pageProducts(event.page, event.size);
   }

}
