import { useCallback, useEffect, useMemo } from "react";
import { Howl } from "howler";

export const useModalController = () => {

  const sound = useMemo(() => new Howl({
    src: ["/cashing.mp3"],
  }), []);

  const playSound = useCallback(() => {
    sound.play();
  }, [sound]);

  useEffect(() => {
    playSound();
  }, [playSound]);


  const handleNavigation = () => {
    window.location.href = "/avaliacao";
  }

  return {
    handleNavigation
  }
}

export default useModalController;