import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type reservationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type loyaltyPointsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class reservation {
  readonly id: string;
  readonly name: string;
  readonly phone?: string;
  readonly date?: string;
  readonly time?: string;
  readonly numberOfPeople?: number;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<reservation, reservationMetaData>);
  static copyOf(source: reservation, mutator: (draft: MutableModel<reservation, reservationMetaData>) => MutableModel<reservation, reservationMetaData> | void): reservation;
}

export declare class loyaltyPoints {
  readonly id: string;
  readonly points?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<loyaltyPoints, loyaltyPointsMetaData>);
  static copyOf(source: loyaltyPoints, mutator: (draft: MutableModel<loyaltyPoints, loyaltyPointsMetaData>) => MutableModel<loyaltyPoints, loyaltyPointsMetaData> | void): loyaltyPoints;
}