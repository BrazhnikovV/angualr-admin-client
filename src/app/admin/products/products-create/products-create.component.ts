import { Component, OnInit } from '@angular/core';

/**
 * @class - ProductsCreateComponent
 * @classdesc - компонент для создания продукта
 */
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.sass']
})
export class ProductsCreateComponent implements OnInit {

  /**
   * @access private
   * @var false checked
   */
  private checked = false;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit() {}
}
