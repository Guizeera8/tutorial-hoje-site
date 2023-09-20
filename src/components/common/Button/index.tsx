import { FC } from "react";

import "./styles.css";

import { ButtonProps } from "./types";
import { useButtonController } from "./buttonController";

export const Button: FC<ButtonProps> = ({ type = "default", hidden }) => {
  const { handleBuyLink } = useButtonController({ type });

  return (
    <div
      className="text-center button_pay_large_player_external"
      onClick={() => handleBuyLink()}
      id="button_pay_large_player_external"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <span style={{ fontSize: ".9rem", fontFamily: "Poppins, sans-serif" }}>
        QUERO ADQUIRIR O PUBLIMONEY
      </span>
    </div>
  );
};

export default Button;
