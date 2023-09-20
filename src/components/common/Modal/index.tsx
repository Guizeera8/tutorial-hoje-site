"use client";

import React from "react";

import SVGComponent from "@/components/common/Svg";

import { formatCents } from "@/services/currency";

import useModalController from "./modalController";

import { startImage } from "@/assets/start";
import {
  buttonIconStyle,
  buttonStyle,
  buttonTextStyle,
  inputContainerStyle,
  inputStyle,
  modalContentStyle,
  modalStyle,
  modalTextStyle,
  modalTitleStyle,
  svgContainerStyle,
} from "./styles";
import { PRICE_DEFAULT } from "@/config";

export const Modal = () => {
  const { handleNavigation } = useModalController();

  return (
    <div style={modalStyle as any}>
      <div style={modalContentStyle as any}>
        <div
          title=""
          role="button"
          aria-label="animation"
          style={svgContainerStyle}
        >
          <SVGComponent svgString={startImage} />
        </div>
        <div className="d-flex flex-column mt-4 text-center">
          <span className="mb-3 text-center" style={modalTitleStyle}>
            Meta concluída!
          </span>
          <span style={modalTextStyle}>Você avaliou o anúncio</span>
          <span style={modalTextStyle}>
            e recebeu <b>{formatCents(PRICE_DEFAULT)} </b>
          </span>
        </div>
        <div className="mb-1 mt-3 w-100">
          <span style={modalTextStyle}>
            Insira sua <b>chave pix</b> agora:
          </span>
        </div>
        <div style={inputContainerStyle}>
          <input placeholder="Chave pix" style={inputStyle} />
        </div>
        <div className="d-flex flex-column mt-4 text-center">
          <span style={modalTextStyle}>
            Resgate seus {formatCents(PRICE_DEFAULT)} agora, assistindo todo o vídeo
            explicativo!
          </span>
        </div>
        <div className="mt-4 w-100">
          <button
            type="button"
            style={buttonStyle}
            onClick={() => handleNavigation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgb(14 165 233)"
              aria-hidden="true"
              style={buttonIconStyle}
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span style={buttonTextStyle}>Resgatar saldo e ver vídeo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
