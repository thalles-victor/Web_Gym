import { v4 as uuid_v4 } from 'uuid';

export interface StructNameImageProps {
  name: string;
  extension: string;
}

export interface StructNameImageResponse {
  image_id: string;
  rewritten_name: string;
}

export const StructNameImage = ({
  name,
  extension,
}: StructNameImageProps): StructNameImageResponse => {
  const id = uuid_v4();

  return {
    image_id: id,
    rewritten_name: `${name}-${id}.${extension}`,
  };
};
