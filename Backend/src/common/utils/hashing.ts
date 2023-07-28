
// import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// export const hash = (string: string) => {
//     const salt = bcrypt.genSaltSync(10);//or your salt constant
//     let pass = bcrypt.hashSync(string, salt);
//     return pass;
// }
export const hash = (string: string) => crypto.createHash('sha256').update(string).digest('base64');

// export const hash_compare = (first_item: string, second_item: string) => bcrypt.compareSync(first_item, second_item);