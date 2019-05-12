/**
 * @interface
 * @description - интерфейс модели партнера
 */
export interface Partner {

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
   * @var url: string
   */
  url: string;

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
   * @var status: created_at
   */
  created_at: number;

  /**
   * @access public
   * @var status: updated_at
   */
  updated_at: number;
}
