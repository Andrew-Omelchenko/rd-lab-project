export class Product {
  constructor(
    public id: number,
    public item: string,
    public category: string,
    public description: string,
    public packaging: string,
    public price: number,
    public image: string
  ) { }
}
