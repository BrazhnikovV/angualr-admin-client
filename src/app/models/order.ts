/**
 * @interface
 * @description - интерфейс модели заказа
 */
export interface Order {

  /**
   * @access public
   * @var id: number
   */
  id: number;

  /**
   * @access public
   * @var user_id: number
   */
  user_id: number;

  /**
   * @access public
   * @var name: string
   */
  name: string;

  /**
   * @access public
   * @var description: string
   */
  description: string;

  /**
   * @access public
   * @var price: number
   */
  price: number;

  /**
   * @access public
   * @var status: number
   */
  status: number;

  /**
   * @access public
   * @var status: created_at
   */
  created_at: number;

  /**
   * @access public
   * @var status: updated_at
   */
  updated_at: number;
}
