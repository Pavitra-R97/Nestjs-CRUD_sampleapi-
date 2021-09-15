import { Injectable, NotFoundException} from "@nestjs/common";
import { Products } from "./product.model";



@Injectable()
export class ProductsService{
    
   private products: Products[]=[];



insertProduct(title:string, desc: string, price: number){
    const prodId = Math.random().toString();
    const newProduct= new Products(prodId,title, desc, price);
    this.products.push(newProduct);
    return prodId;
}

     getProducts(){
         return [...this.products];
     }
     getSingleProduct(productId:string){
         const product = this.findProduct(productId)[0];
         return { ...product };
     }

     updateProduct(productId: string, title: string, desc:string, price:number){
        const [product,index] = this.findProduct(productId);
        const updateProduct = {...product};
        if (title){
            updateProduct.title=title;
        }
        if (desc){
            updateProduct.description=desc;
        }
        if (price){
            updateProduct.price=price;
        }
        this.products[index]= updateProduct;
     }
     
    

        deleteProduct(prodId:string){​​​​​​
        const index=this.findProduct(prodId)[1];
        this.products.splice(index,1);
                }​​​​​​


     private findProduct(id: string):[Products,number]{ 
         const productIndex = this.products.findIndex(prod => prod.id===id);
         const product = this.products[productIndex];
         if (!product){
             throw new NotFoundException('could not find product.');
         }
         return[product, productIndex];
     }
}