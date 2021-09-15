import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "./product.model";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";


@Module({
    imports:[],
    controllers:[ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}