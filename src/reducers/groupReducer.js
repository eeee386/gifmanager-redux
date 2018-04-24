export const groupReducer = (state = ['BaseGroup'], action) => {
    switch (action.type) {
        case 'Add_Group':
            return [...state, action.groupName];
        default:
            return state;
    }
};