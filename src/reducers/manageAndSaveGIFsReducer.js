export const searchGIFsReducer = (state = [], action) => {
    switch (action.type) {
        case "Search_GIF":
            return action.foundGIFsUrls;
        default:
            return state;
    }
};

export const manageGIFsReducer = (state = [], action) => {
    switch (action.type) {
        case "Save_GIF":
            return [...state, {
                imageUrl: action.urlToSave,
                group: null,
                editMode: false,
            }];
        case "Delete_GIF":
            return state.filter(item => item.imageUrl === action.urlToDelete);
        case "Change_Edit_Mode":
            return state.map(item => {
                if (item.imageUrl === action.urlToChange) {
                    item.editMode = !item.editMode;
                }
                return item;
            });
        case 'Add_GIF_To_Group':
            return state.map(item => {
                if (item.imageUrl === action.urlToAddToGroup) {
                    item.group = action.groupName;
                }
                return item;
            });
        default:
            return state;
    }
};