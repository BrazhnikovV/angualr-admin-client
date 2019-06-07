/**
 * @interface
 * @description - интерфейс модели продукта
 */
export interface Product {

  /**
   * @access public
   * @var id: number
   */
  id: number;

  /**
   * @access public
   * @var сcategory_id: number
   */
  category_id: number;

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
   * @var code: string
   */
  code: string;

  /**
   * @access public
   * @var hidden: boolean
   */
  hidden: boolean;

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
