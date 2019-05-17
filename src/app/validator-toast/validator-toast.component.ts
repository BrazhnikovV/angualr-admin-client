import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

/**
 * @class - ValidatorToastComponent
 * @classdesc - компонент для отображения сообщений валидатора в виде тостов
 */
@Component({
  selector: 'app-validator-toast',
  templateUrl: './validator-toast.component.html',
  styleUrls: ['./validator-toast.component.sass']
})
export class ValidatorToastComponent implements OnInit {

  /**
   * constructor - конструктор
   * @param messageService - сервис сообщения от primeng
   */
  constructor( private messageService: MessageService ) {}

  /**
   * addSingle -
   * @param fieldName - имя поля
   * @param msg - сообщение об ошибке
   * @return void
   */
  addSingle( fieldName: string, msg: string ) {
    this.messageService.add( {severity:'error', summary: 'Field: ' + fieldName.toUpperCase(), detail: "Error: " + msg });
  }

  /**
   * addMultiple -
   * @return void
   */
  addMultiple() {
    this.messageService.addAll([
      {severity:'success', summary:'Service Message', detail:'Via MessageService'},
      {severity:'info', summary:'Info Message', detail:'Via MessageService'}
    ]);
  }

  /**
   * clear -
   * @return void
   */
  clear() {
    this.messageService.clear();
  }

  ngOnInit() {
  }

}
