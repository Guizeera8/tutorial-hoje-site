"use client";

import { useEffect, useMemo } from "react";

export const useAvaliationController = () => {

  const htmlCode = useMemo(() => 
  `<div id="vid_650a0eab0c9e0a000928063a" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_650a0eab0c9e0a000928063a" src="https://images.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a0eab0c9e0a000928063a/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_650a0eab0c9e0a000928063a" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div>`
  , []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const buttonContainer = document.getElementById("button_pay_large_player_external");
      if (buttonContainer) {
        buttonContainer.style.display = "flex";
      }
    },  12 * 600 * 1000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  return {
    htmlCode
  }
}

export default useAvaliationController;