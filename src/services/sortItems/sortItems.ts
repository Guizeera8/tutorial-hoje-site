import {  publi } from "@/mocks/publi";

export const sortItems = () => {
    const randomIndex = Math.floor(Math.random() * publi.length);
    return publi[randomIndex];
}

export default sortItems;