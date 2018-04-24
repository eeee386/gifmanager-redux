export const saveGIFUrl = (urlToSave) => ({
    type: 'Save_GIF',
    urlToSave
});

export const deleteGIFUrl = (urlToDelete) => ({
    type: 'Delete_GIF',
    urlToDelete
});

export const changeEditMode = (urlToChange, groupName) => ({
   type: 'Change_Edit_Mode',
    urlToChange,
    groupName
});

export const addGIFToGroup = (urlToAddToGroup) => ({
   type: 'Add_GIF_To_Group',
    urlToAddToGroup
});

