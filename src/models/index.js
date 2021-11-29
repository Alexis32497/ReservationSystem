// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { reservation, loyaltyPoints } = initSchema(schema);

export {
  reservation,
  loyaltyPoints
};