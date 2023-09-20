"use client";

import { memo, FC } from "react";
import Script from "next/script";
import { Button } from "@/components/common/Button";
import useAvaliationController from "./avaliationController";
import "./styles.css";

export const Avaliation: FC = memo(() => {
  const { htmlCode } = useAvaliationController();

  return (
    <>
      <div className="containerDiv">
        <div>
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 12px 2px",
              marginTop: "20px",
              padding: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "1rem",
                color: "rgb(100, 116, 139)",
                fontWeight: 600,
                textAlign: "center",
                marginBottom: "4px",
              }}
            >
              Ganhe de{" "}
              <span style={{ color: "rgb(14, 165, 233)" }}>3 a 5 salários</span>{" "}
              por mês
            </h1>
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                color: "rgb(14, 165, 233)",
                textAlign: "center",
                display: "block",
                letterSpacing: "1px",
                marginBottom: "25px",
              }}
            >
              AVALIANDO ANÚNCIOS!
            </span>
            <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
            <span className="d-flex align-items-center justify-content-center gap-1 mt-4 font-weight-medium text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="rgb(148 163 184)"
                aria-hidden="true"
                style={{ width: "16px", height: "16px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75a.5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5.5 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span style={{ fontSize: "12px", color: "rgb(148, 163, 184)" }}>
                Assista esse breve vídeo com atenção.
              </span>
            </span>
          </div>
        </div>
        <Button type="default" hidden />
      </div>
      <Script id="discount">
        {`
         window.history.pushState({},"",location.href);
          window.onpopstate = function(){
              setTimeout(function () {
                  location.href = '/desconto';
              },1);
          };
        `}
      </Script>
      <Script id="scr_650a0eab0c9e0a000928063a">
        {`var s=document.createElement("script");s.src="https://scripts.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a0eab0c9e0a000928063a/player.js",s.async=!0,document.head.appendChild(s);`}
      </Script>
    </>
  );
});

Avaliation.displayName = "Avaliation";

export default Avaliation;
