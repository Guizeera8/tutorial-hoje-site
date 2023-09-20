'use client';

import { DISCOUNT_DEFAULT } from "@/config";

export const useDiscountController = () => {

    const discount = DISCOUNT_DEFAULT;

    const htmlVideo1 = `
    <div id="vid_650a1e30f39c31000aba670c" style="position:relative;width:100%;padding: 178.21782178217822% 0 0;"><img id="thumb_650a1e30f39c31000aba670c" src="https://images.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a1e30f39c31000aba670c/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_650a1e30f39c31000aba670c" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>
    `;
    const htmlVideo2 = `<div id="vid_650a1e39f39c31000aba670f" style="position:relative;width:100%;padding: 178.21782178217822% 0 0;"><img id="thumb_650a1e39f39c31000aba670f" src="https://images.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a1e39f39c31000aba670f/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_650a1e39f39c31000aba670f" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>`

    return {
        discount,
        htmlVideo1,
        htmlVideo2
    }
}

export default useDiscountController;