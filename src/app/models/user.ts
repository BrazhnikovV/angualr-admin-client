/**
 * @interface
 * @description - интерфейс модели пользователя
 */
export interface User {

  /**
   * @access public
   * @var id: number
   */
  id: number;

  /**
   * @access public
   * @var username: string
   */
  username: string;

  /**
   * @access public
   * @var auth_key: string
   */
  auth_key: string;

  /**
   * @access public
   * @var email: string
   */
  email: string;

  /**
   * @access public
   * @var status: boolean
   */
  status: boolean;
}
