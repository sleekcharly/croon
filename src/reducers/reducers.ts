export const OriginReducer = (state: any, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_ORIGIN':
      console.log(action.payload);
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export const DestinationReducer = (state: any, action: any) => {
  console.log(action.payload);
  switch (action.type) {
    case 'ADD_DESTINATION':
      console.log(action.payload);
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
