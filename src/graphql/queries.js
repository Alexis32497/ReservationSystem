/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
      id
      name
      phone
      date
      time
      numberOfPeople
      email
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelreservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        date
        time
        numberOfPeople
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncReservations = /* GraphQL */ `
  query SyncReservations(
    $filter: ModelreservationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReservations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        phone
        date
        time
        numberOfPeople
        email
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLoyaltyPoints = /* GraphQL */ `
  query GetLoyaltyPoints($id: ID!) {
    getLoyaltyPoints(id: $id) {
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
export const listLoyaltyPointss = /* GraphQL */ `
  query ListLoyaltyPointss(
    $filter: ModelloyaltyPointsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLoyaltyPointss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        points
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLoyaltyPoints = /* GraphQL */ `
  query SyncLoyaltyPoints(
    $filter: ModelloyaltyPointsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLoyaltyPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        points
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
