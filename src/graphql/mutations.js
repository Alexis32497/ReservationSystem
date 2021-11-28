/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelreservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      name
      date
      numberOfPeople
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelreservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      name
      date
      numberOfPeople
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelreservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      name
      date
      numberOfPeople
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createLoyaltyPoints = /* GraphQL */ `
  mutation CreateLoyaltyPoints(
    $input: CreateLoyaltyPointsInput!
    $condition: ModelloyaltyPointsConditionInput
  ) {
    createLoyaltyPoints(input: $input, condition: $condition) {
      id
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateLoyaltyPoints = /* GraphQL */ `
  mutation UpdateLoyaltyPoints(
    $input: UpdateLoyaltyPointsInput!
    $condition: ModelloyaltyPointsConditionInput
  ) {
    updateLoyaltyPoints(input: $input, condition: $condition) {
      id
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteLoyaltyPoints = /* GraphQL */ `
  mutation DeleteLoyaltyPoints(
    $input: DeleteLoyaltyPointsInput!
    $condition: ModelloyaltyPointsConditionInput
  ) {
    deleteLoyaltyPoints(input: $input, condition: $condition) {
      id
      points
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
