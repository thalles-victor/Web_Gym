import { FileUpload } from 'src/@types/FileUpload';
import fs from 'fs';
import { join } from 'path';
import { StructNameImage } from './StructNameImage';
import { HttpException, HttpStatus } from '@nestjs/common';

export const WriteImageInDisk = ({
  createReadStream,
  filename,
}: FileUpload) => {
  const [name, extension] = filename.split('.');

  const imageRenamed = StructNameImage({ name, extension });

  const imageSavedData = new Promise(async (resolve) => {
    createReadStream().pipe(
      fs
        .createWriteStream(
          join(process.cwd(), `/src/upload/${imageRenamed.rewritten_name}`),
        )
        .on('finish', () => resolve(imageRenamed))
        .on('error', (error) => {
          console.log(error);

          throw new HttpException(
            'Cloud not save image',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }),
    );
  });

  return imageRenamed;
};

export const getImageUrl = (name: string) => {
  return `${process.env.PUBLIC_ASSETS_URL}/${name}`;
};
