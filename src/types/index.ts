import * as api from './types';

export type User = api.components['schemas']['User'];
export type Student = api.components['schemas']['Student'];
export type PrivateBoardingOwner = api.components['schemas']['PrivateBoardingOwner'];
export type Hostel = api.components['schemas']['Hostel'];
export type Room = api.components['schemas']['Room'];
export type ExchangeRequest = api.components['schemas']['ExchangeRequest'];
export type PrivateBoarding = api.components['schemas']['PrivateBoarding'];
export type BoardingRoom = api.components['schemas']['BoardingRoom'];

// Hostel-related types
export type HostelPaths = {
    ListRequest: api.paths['/hostels']['get']['parameters']['query'];
    ListResponse: api.paths['/hostels']['get']['responses']['200']['content']['application/json']
    | api.paths['/hostels']['get']['responses']['500']['content']['application/json']
    | api.paths['/hostels']['get']['responses']['400']['content']['application/json'];
    CreateRequest: api.paths['/hostels']['post']['requestBody']['content']['application/json'];
    CreateResponse: api.paths['/hostels']['post']['responses']['201']['content']['application/json'] |
    api.paths['/hostels']['post']['responses']['400']['content']['application/json'] |
    api.paths['/hostels']['post']['responses']['500']['content']['application/json'];
    GetByIdRequest: api.paths['/hostels/{id}']['get']['parameters']['path'];
    GetByIdResponse: api.paths['/hostels/{id}']['get']['responses']['200']['content']['application/json'] |
    api.paths['/hostels/{id}']['get']['responses']['404']['content']['application/json'];
    UpdateRequest: api.paths['/hostels/{id}']['put']['requestBody']['content']['application/json'];
    UpdateResponse: api.paths['/hostels/{id}']['put']['responses']['200']['content']['application/json']
    | api.paths['/hostels/{id}']['put']['responses']['400']['content']['application/json']
    | api.paths['/hostels/{id}']['put']['responses']['404']['content']['application/json']
    | api.paths['/hostels/{id}']['put']['responses']['500']['content']['application/json'];
    DeleteResponse: api.paths['/hostels/{id}']['delete']['responses']['204']['content']['application/json']
    | api.paths['/hostels/{id}']['delete']['responses']['400']['content']['application/json']
    | api.paths['/hostels/{id}']['delete']['responses']['404']['content']['application/json']
    | api.paths['/hostels/{id}']['delete']['responses']['500']['content']['application/json'];
};


// Room-related types
export type RoomListResponse = api.paths['/hostels/{id}/rooms']['get']['responses']['200']['content']['application/json'];
export type RoomCreateRequest = api.paths['/hostels/{id}/rooms']['post']['requestBody']['content']['application/json'];
export type RoomCreateResponse = api.paths['/hostels/{id}/rooms']['post']['responses']['201']['content']['application/json'];
export type RoomGetByIdResponse = api.paths['/hostels/{id}/rooms/{roomId}']['get']['responses']['200']['content']['application/json'];
export type RoomUpdateRequest = api.paths['/hostels/{id}/rooms/{roomId}']['put']['requestBody']['content']['application/json'];
export type RoomUpdateResponse = api.paths['/hostels/{id}/rooms/{roomId}']['put']['responses']['200']['content']['application/json'];
export type RoomDeleteResponse = api.paths['/hostels/{id}/rooms/{roomId}']['delete']['responses']['204'];

// User-related types
export type UserListResponse = api.paths['/users']['get']['responses']['200']['content']['application/json'];
export type UserCreateRequest = api.paths['/users']['post']['requestBody']['content']['application/json'];
export type UserCreateResponse = api.paths['/users']['post']['responses']['201']['content']['application/json'];
export type UserGetByIdResponse = api.paths['/users/{id}']['get']['responses']['200']['content']['application/json'];
export type UserUpdateRequest = api.paths['/users/{id}']['put']['requestBody']['content']['application/json'];
export type UserUpdateResponse = api.paths['/users/{id}']['put']['responses']['200']['content']['application/json'];
export type UserDeleteResponse = api.paths['/users/{id}']['delete']['responses']['204'];

// Student-related types
export type StudentListResponse = api.paths['/students']['get']['responses']['200']['content']['application/json'];
export type StudentCreateRequest = api.paths['/students']['post']['requestBody']['content']['application/json'];
export type StudentCreateResponse = api.paths['/students']['post']['responses']['201']['content']['application/json'];
export type StudentGetByIdResponse = api.paths['/students/{id}']['get']['responses']['200']['content']['application/json'];
export type StudentUpdateRequest = api.paths['/students/{id}']['put']['requestBody']['content']['application/json'];
export type StudentUpdateResponse = api.paths['/students/{id}']['put']['responses']['200']['content']['application/json'];
export type StudentDeleteResponse = api.paths['/students/{id}']['delete']['responses']['204'];

// Private Boarding Owner-related types
export type PrivateBoardingOwnerListResponse = api.paths['/private-boarding-owners']['get']['responses']['200']['content']['application/json'];
export type PrivateBoardingOwnerCreateRequest = api.paths['/private-boarding-owners']['post']['requestBody']['content']['application/json'];
export type PrivateBoardingOwnerCreateResponse = api.paths['/private-boarding-owners']['post']['responses']['201']['content']['application/json'];
export type PrivateBoardingOwnerGetByIdResponse = api.paths['/private-boarding-owners/{id}']['get']['responses']['200']['content']['application/json'];
export type PrivateBoardingOwnerUpdateRequest = api.paths['/private-boarding-owners/{id}']['put']['requestBody']['content']['application/json'];
export type PrivateBoardingOwnerUpdateResponse = api.paths['/private-boarding-owners/{id}']['put']['responses']['200']['content']['application/json'];
export type PrivateBoardingOwnerDeleteResponse = api.paths['/private-boarding-owners/{id}']['delete']['responses']['204'];

// Exchange Request-related types
export type ExchangeRequestListResponse = api.paths['/room-requests']['get']['responses']['200']['content']['application/json'];
export type ExchangeRequestCreateRequest = api.paths['/room-requests']['post']['requestBody']['content']['application/json'];
export type ExchangeRequestCreateResponse = api.paths['/room-requests']['post']['responses']['201']['content']['application/json'];
export type ExchangeRequestUpdateStateRequest = api.paths['/exchange-requests/{id}/update-state']['put']['requestBody']['content']['application/json'];
export type ExchangeRequestUpdateStateResponse = api.paths['/exchange-requests/{id}/update-state']['put']['responses']['200']['content']['application/json'];
export type ExchangeRequestAcceptRejectResponse = api.paths['/room-requests/{id}']['put']['responses']['200']['content']['application/json'];

// Allocation-related types
export type AllocationCreateRequest = api.paths['/allocation-students']['post']['requestBody']['content']['application/json'];
export type AllocationCreateResponse = api.paths['/allocation-students']['post']['responses']['200']['content']['application/json'];

// Account-related types
export type AccountDetailsRequest = api.paths['/account']['get']['parameters']['query'];
export type AccountDetailsResponse = api.paths['/account']['get']['responses']['200']['content']['application/json'];
