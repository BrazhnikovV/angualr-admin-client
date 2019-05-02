import { Component, OnInit } from '@angular/core';

/**
 * @class - PartnersCreateComponent
 * @classdesc - компонент для создания партнера
 */
@Component({
  selector: 'app-partners-create',
  templateUrl: './partners-create.component.html',
  styleUrls: ['./partners-create.component.sass']
})
export class PartnersCreateComponent implements OnInit {

  /**
   * @access private
   * @var boolean checked
   */
  private checked: boolean;

  /**
   * constructor
   */
  constructor() {}

  ngOnInit() {}
}
