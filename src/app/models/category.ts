/**
 * @interface
 * @description - интерфейс модели категории
 */
export interface Category {

  /**
   * @access public
   * @var id: number
   */
  id: number;

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
   * @var hidden: boolean
   */
  hidden: boolean;

  /**
   * @access public
   * @var status: number
   */
  nesting: number;

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
