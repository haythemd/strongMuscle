export interface Product{
  id : number;
  name : string;
  description :string;
  price : number;
  discount: number;
  imageUrl : string;
  nutValueUrl : string;
  category : Category;

}


export interface Category {
  id : number;
  name : string ;
  prodcuts: Product[]
}