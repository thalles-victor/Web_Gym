import { hashSync } from 'bcrypt';
export const hashPasswordTransform = {
  to(password: string): string {
    return hashSync(password, 13);
  },
  from(hash: string): string {
    return hash;
  },
};
