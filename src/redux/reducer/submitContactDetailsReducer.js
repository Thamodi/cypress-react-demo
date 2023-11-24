const submitContactDetailsReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SUBMIT_CONTACT_DETAILS':
        return { ...state, contactDetails: action.payload };
      default:
        return state;
    }
};

export default submitContactDetailsReducer;