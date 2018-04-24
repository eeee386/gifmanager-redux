import axios from "axios/index";

const searchGIFUrlAction = (foundGIFsUrls) => ({
    type: 'Search_GIF',
    foundGIFsUrls: foundGIFsUrls
});

const searchGIFRequest = async (searchTerm) => {
    let foundGIFsUrls;
    await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=5af1dpHDnUoSnLBVS6HllccaUIjg4mAW&q=${searchTerm}&limit=25&offset=0&rating=R&lang=en`)
        .then(response => {
            foundGIFsUrls = response.data.data.map(item => item.images.original.url);
        }).catch((err)  =>{
            console.log(err);
        });
    return foundGIFsUrls;
};

export const searchGIFThunk = (searchTerm) => {
    return function(dispatch) {
        return searchGIFRequest(searchTerm).then(
            function(foundGifsUrls){
                dispatch(searchGIFUrlAction(foundGifsUrls));
            }

        )
    }
};

