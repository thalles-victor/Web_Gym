import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductObjType } from '../Core/ObjectsTypes/ProductObjectType';
import { RegisterProductDTO } from './DTOs/registerProduct.dto';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => String)
  async hello() {
    return 'Hello Graphql';
  }

  @Mutation(() => ProductObjType)
  async registerProduct(@Args('product') product: RegisterProductDTO) {
    const result = await this.productService.createProduct(product);

    console.log(result);
    return result;
  }

  @Query(() => [ProductObjType])
  async getAllProducts() {
    const result = await this.productService.getAllProducts();

    return result;
  }

  @Query(() => ProductObjType)
  async getProductById(@Args('id') id: string) {
    const result = await this.productService.getProductById(id);

    return result;
  }
}
