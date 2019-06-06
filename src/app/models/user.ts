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
   * @var email: string
   */
  email: string;

  /**
   * @access public
   * @var status: boolean
   */
  status: boolean;

  /**
   * @access public
   * @var created_at: number
   */
  created_at: number;

  /**
   * @access public
   * @var updated_at: number
   */
  updated_at: number;
}
