import qs from "qs";

export const ordersQuery = qs.stringify({
    fields: ['firstName', 'lastName', 'subTotalPrice', 'createdAt']
})