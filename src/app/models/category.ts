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
   * @var parent_id: number
   */
  parent_id: number;

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
   * @var created_at: created_at
   */
  created_at: number;

  /**
   * @access public
   * @var updated_at: updated_at
   */
  updated_at: number;
}
