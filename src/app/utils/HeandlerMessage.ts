/**
 * @class - HeandlerMessage
 * @classdesc - класс для обработки сообщений валидатора, расширение сообщения
 */
export class HeandlerMessage {

  /**
   *  @access private
   *  @var msgCnf: {} - небор текстовых сообщений для различных видов валидации
   */
  private static msgCnf: {} = {
    required: 'Field is required',
    email:    'Field should contain e-mail',
    pattern:  'Field does not match to pattern'
  }

  /**
   * constructor - конструктор
   */
  constructor() {}

  /**
   * handle -
   * @param field
   * @return string[]
   */
  public static handle ( field ): any[] {
    let msgs = [];
    if ( field.errors.hasOwnProperty( 'minlength' ) ) {
      this.msgCnf['minlength'] = ` Minimum length ${ field.errors.minlength.requiredLength }`;
    }
    if ( field.errors.hasOwnProperty( 'maxlength' ) ) {
      this.msgCnf['maxlength'] = ` Maximum length ${ field.errors.maxlength.requiredLength }`;
    }
    if ( field.errors.hasOwnProperty( 'min' ) ) {
      this.msgCnf['min'] = ` Min number ${ field.errors.min.min }`;
    }
    if ( field.errors.hasOwnProperty( 'max' ) ) {
      this.msgCnf['max'] = ` Max number length ${ field.errors.max.max }`;
    }

    if ( field.errors.hasOwnProperty( 'pattern' ) ) {
      if ( field.errors.pattern.requiredPattern === '^[0-9]*$' ) {
        this.msgCnf['pattern'] = ` There must be a number: ${ field.errors.pattern.requiredPattern }`;
      }
    }

    Object.keys( field.errors ).forEach( ( error: string ) => {
      msgs.push(this.msgCnf[error]);
    });

    return msgs;
  }
}
