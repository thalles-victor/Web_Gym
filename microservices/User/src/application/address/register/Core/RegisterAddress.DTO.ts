import { AddressEntity } from 'src/Entities/Address.entity';

export interface RegisterAddressDTO {
  user_id: string;
  address: AddressEntity;
}
