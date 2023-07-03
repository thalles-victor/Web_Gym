import { Injectable, OnModuleInit } from '@nestjs/common';
import { firstValueFrom, lastValueFrom } from 'rxjs';

import { RegisterProductDTO } from './DTOs/registerProduct.dto';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { WriteImageInDisk, getImageUrl } from 'src/utils/WriteImageInDisk';

@Injectable()
export class ProductService implements OnModuleInit {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'gateway-client',
        brokers: ['kafka_service:9092'],
      },
      consumer: {
        groupId: 'gateway-groupid',
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('PRODUCT_REGISTER_TOPIC');
    this.client.subscribeToResponseOf('GET_ALL_PRODUCTS');
    this.client.subscribeToResponseOf('GET_PRODUCT_BY_ID_TOPIC');
    await this.client.connect();
  }

  async createProduct(product: RegisterProductDTO) {
    const MainImageData = WriteImageInDisk(await product.main_image);

    const SecondaryImagesDataAsPromise = product.secondary_images.map(
      async (secondary_image) => {
        return WriteImageInDisk(await secondary_image).rewritten_name;
      },
    );

    const SecondaryImagesData = await Promise.all(
      SecondaryImagesDataAsPromise,
    ).then((images) => images);

    const result = await lastValueFrom(
      this.client.send('PRODUCT_REGISTER_TOPIC', {
        ...product,
        main_image: MainImageData.rewritten_name,
        secondary_images: SecondaryImagesData,
      }),
    );

    return {
      ...result,
      main_image: getImageUrl(result.main_image),
      secodary_images: result.secodary_images.map((image) => {
        return getImageUrl(image);
      }),
    };
  }

  async getAllProducts() {
    const result = await lastValueFrom(
      this.client.send('GET_ALL_PRODUCTS', {}),
    );

    const allProducts = result.map((product) => {
      return {
        ...product,
        main_image: getImageUrl(product.main_image),
        secodary_images: product.secodary_images.map((secondary_image) =>
          getImageUrl(secondary_image),
        ),
      };
    });

    return allProducts;
  }

  async getProductById(id: string) {
    const result = await lastValueFrom(
      this.client.send('GET_PRODUCT_BY_ID_TOPIC', id),
    );

    return {
      ...result,
      main_image: getImageUrl(result.main_image),
      secodary_images: result.secodary_images.map((image) => {
        return getImageUrl(image);
      }),
    };
  }
}
