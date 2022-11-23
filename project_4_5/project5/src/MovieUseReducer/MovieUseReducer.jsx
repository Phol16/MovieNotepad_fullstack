export const InitialValue = {
  Genre: 'all',
  Searched: [],
  card: '',
  UserId: '',
  Data: {},
  Update: '',
};

export const MovieUseReducer = (state, action) => {
  switch (action.type) {
    case 'GET_GENRE':
      return {
        ...state,
        Genre: action.payload,
      };
    case 'GET_SEARCH':
      return {
        ...state,
        Searched: action.payload,
      };
    case 'GET_CARD':
      return {
        ...state,
        Card: action.payload,
      };
    case 'GET_USERID':
      return {
        ...state,
        UserId: action.payload,
      };
    case 'GET_DATA':
      return {
        ...state,
        Data: action.payload,
      };
    case 'GET_UPDATE':
      return {
        ...state,
        Update: action.payload,
      };
    default:
      throw new Error(`No case for type: ${action.type}`);
  }
};
