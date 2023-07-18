import APIBase from "../servises/ApiBase"

export const userService = {
    getAllUser
}

function getAllUser() {
    return APIBase({
        method: 'GET',
        url: `/users`,
        tokenRequired: false,
    })
}