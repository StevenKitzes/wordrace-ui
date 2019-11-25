/** Global definitions for development **/

export interface Action {
  type: string;
  payload?: any;
}
export type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;