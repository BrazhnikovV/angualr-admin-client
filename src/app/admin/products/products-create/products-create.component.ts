import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { RpcService } from 'src/app/services/rpc.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidatorMessageComponent } from 'src/app/validator-message/validator-message.component';
import { Category } from '../../../models/category';

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
   * @var viewChildren: QueryList<ValidatorMessageComponent> - список компонентов
   * для отображения сообщений валидатора
   */
  @ViewChildren( ValidatorMessageComponent )
  private viewChildren: QueryList<ValidatorMessageComponent>;

  /**
   *  @access private
   *  @var categories: Category[] - массив категорий для выбора
   */
  private categories: Category[];

  /**
   *  @access private
   *  @var selectedCategory: Category - сущность категория
   */
  private selectedCategory: Category;

  /**
   *  @access private
   *  @var formData: FormData - объект для передачи файлов post запросом
   */
  private formData: FormData = new FormData();

  /**
   *  @access private
   *  @var errors: [] - массив ошибок, полученных при аутентификации
   */
  private errors: [];

  /**
   *  @access private
   *  @var productForm: FormGroup - группа валидируемых полей
   */
  private productForm: FormGroup = new FormGroup({
    category_id: new FormControl('', [
      Validators.required,
      Validators.minLength(1 )
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(128 )
    ]),
    description: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4 ),
      Validators.maxLength(512 )
    ]),
    price: new FormControl('' ,[
      Validators.required,
      Validators.pattern('[0-9]*'),
      Validators.min(1 ),
      Validators.max(10000 )
    ]),
    code: new FormControl('' ,[
      Validators.required,
      Validators.minLength(1 ),
      Validators.maxLength(10000 )
    ]),
    files: new FormControl('' ,[
      Validators.required
    ]),
    hidden: new FormControl('' ,[
      Validators.required,
      Validators.minLength( 0 ),
      Validators.maxLength(1 )
    ])
  });

  /**
   * constructor
   * @param rpcService: RpcService - сервис для выполнения запроса
   * @param router -
   */
  constructor( private rpcService: RpcService, private router: Router ) {}

  /**
   * onSubmit - перехватываем события откравки формы
   * @return void
   */
  onSubmit() {
    this.rpcService.postProduct( this.formData ).subscribe(
      response => { this.handleResponse( response ) },error => { this.handleError( error ) }
    );
  }

  /**
   * inputChange - перехватываем событие набора символов в текстовых полях
   * @return void
   */
  inputChange() {
    this.viewChildren.forEach( child => child.ngOnChanges() );
  }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.rpcService.getNoParrentsCategories().subscribe(
      response => { this.categories = response; },error => { this.handleError( error ) }
    );
    this.productForm.get('hidden').setValue(false );
  }

  /**
   * handleError - обработать ошибку получения/отправки данных
   * @param error - данные об ошибке
   */
  private handleError( response: any ) {
    console.log('### CategoryCreateComponent => handleError()');
    this.errors = response.error;
  }

  /**
   * handleResponse -
   * @param response - данные об ошибке
   */
  private handleResponse( response: any ) {
    this.router.navigate(['/products/list']);
  }

  /**
   * handleUploader - обработать событие выбора файлов для загрузки
   * @param event - событие выбора файлов
   */
  private handleUploader( event ) {

    let fileList: FileList = event.originalEvent.target.files;

    Object.keys( fileList ).map( file => {
      this.formData.append(file, fileList[file])
    });

    //this.formData.append('files', fileList);

    this.productForm.get('category_id').setValue( this.selectedCategory.id );
    this.formData.append('data', JSON.stringify( this.productForm.value ) );
    this.productForm.get('files').setValue( this.formData );
    console.log(this.formData);
  }
}
