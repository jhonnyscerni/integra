import { WoocommerceService } from './../../../../services/woocommerce.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woocommerce-list-publicado',
  templateUrl: './woocommerce-list-publicado.component.html',
  styleUrls: ['./woocommerce-list-publicado.component.scss']
})
export class WoocommerceListPublicadoComponent implements OnInit {


  products: any = [];

  constructor(private woocommerceService: WoocommerceService) { }

  ngOnInit() {
    this.getWooCommerceProdutsPublicados();
  }

  public getWooCommerceProdutsPublicados() {
    this.woocommerceService.getProdutoWooPublicados().subscribe(res => this.products = res)
  }

}
