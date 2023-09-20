'use client';

import { useEffect, useState } from "react";
import sortItems from "@/services/sortItems/sortItems";
import { Publi } from "@/types/publi";
import { useModalStore } from "@/store/modal";

export const useAnnouncementController = () => {
    const { open } = useModalStore();

    const [htmlCode, setHtmlCode] = useState<string | null>(null);
    const [itemPubli, setItemPubli] = useState<Publi | null>(null);
    
    useEffect(() => {
        const items = sortItems();
        setItemPubli(items);
    }, []);

    useEffect(() => {
        if(itemPubli?.video) {
            setHtmlCode(
                `<div id="vid_${itemPubli?.video ?? ""}" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_${itemPubli?.video ?? ""}" src="https://images.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/${itemPubli?.video ?? ""}/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_${itemPubli?.video ?? ""}" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>`
            );
            return;
        }
        setHtmlCode(null);
    }, [itemPubli]);

    return {
        open,
        itemPubli,
        htmlCode
    }
}

export default useAnnouncementController;
