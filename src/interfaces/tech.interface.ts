export interface TechInterface {
  id?: number;
  name: string;
  type: string;
  country: string;
  destroyed: number;
  abandoned: number;
  damaged: number;
  captured: number;
  total: number;
  cost: number;
  destructionDate: Date;
}
