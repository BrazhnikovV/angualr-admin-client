import { Component, OnInit } from '@angular/core';

/**
 * @class - CategoryCreateComponent
 * @classdesc - компонент для создания категории
 */
@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.sass']
})
export class CategoryCreateComponent implements OnInit {

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
