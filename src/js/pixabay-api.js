export function getPosts(searchQuery) {

    const BASE_URL = "https://pixabay.com";
    const END_POINT = "/api/";
    const params = new URLSearchParams({
        key: '45032404-48d319b76024d102c65f50bc8',
        q: searchQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    });

    const url = `${BASE_URL}${END_POINT}?${params}`;

    return fetch(url)
        .then(respond => respond.json())
        .catch(error => {
            throw new Error (`HTTP error! status: ${response.status}`)
        })
};
