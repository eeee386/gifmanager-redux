import {combineReducers} from "redux";
import {manageGIFsReducer, searchGIFsReducer} from "./manageAndSaveGIFsReducer";
import {groupReducer} from "./groupReducer.js";

export const rootReducer = combineReducers({
    images: manageGIFsReducer,
    searchResultUrls: searchGIFsReducer,
    groups: groupReducer
});