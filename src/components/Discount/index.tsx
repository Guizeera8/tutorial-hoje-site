"use client";

import { type FC } from "react";
import Script from "next/script";

import { Button } from "@/components/common/Button";
import { useDiscountController } from "./discountController";
import { CHECKOUT, PRICE_DEFAULT } from "@/config";
import { formatCents } from "@/services/currency";

export const Discount: FC = () => {
  const { discount, htmlVideo1, htmlVideo2 } = useDiscountController();

  return (
    <>
      <div className="justify-content-center row">
        <div className="col-sm-6">
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 12px 2px",
              marginTop: "20px",
              padding: "25px",
            }}
          >
            <h2
              className="pt-2"
              style={{
                color: "rgb(100, 116, 139)",
                fontSize: "1rem",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Como você já avaliou um anúncio e ganhou{" "}
              <span style={{ color: "rgb(14, 165, 233)", fontSize: "1rem" }}>
                {formatCents(PRICE_DEFAULT)}
              </span>
              ...
            </h2>
            <h2
              className="pt-2 text-lg"
              style={{
                color: "rgb(100, 116, 139)",
                fontSize: "1.1rem",
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              Estamos liberando o aplicativo de{" "}
              <span
                style={{
                  color: "rgb(239, 68, 68)",
                  textDecoration: "line-through",
                }}
              >
                R$ 115,14
              </span>{" "}
              reais por apenas
            </h2>
            <h1
              className="pt-2 text-center"
              style={{
                fontSize: "2.25rem",
                lineHeight: "2.5rem",
                color: "rgb(16, 185, 129)",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              {formatCents(discount)}
            </h1>
            <Button type="discount" />
            <br />
            <div dangerouslySetInnerHTML={{ __html: htmlVideo1 }} />
            <br />
            <div dangerouslySetInnerHTML={{ __html: htmlVideo2 }} />
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
                  d="M10.339 2.237a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75 .5.5 0 00-.479.425A12.11 12.11 0 002 7c0 5.163 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 16.564 18 12.163 18 7.001c0-.54-.035-1.07-.104-1.59a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span style={{ fontSize: "12px", color: "rgb(148, 163, 184)" }}>
                Assista esse breve vídeo com atenção.
              </span>
            </span>
          </div>
          <Button type="discount" />
          <span className="d-flex align-items-start justify-content-center gap-1 mt-4 font-weight-medium text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="rgb(100 116 139)"
              aria-hidden="true"
              style={{ width: "14px", height: "14px", marginRight: "8px" }}
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span
              style={{
                fontSize: "12px",
                color: "rgb(100, 116, 139)",
                fontWeight: 600,
                marginBottom: 30,
              }}
            >
              Você será enviado para um ambiente <br />
              totalmente seguro.
            </span>
          </span>
        </div>
      </div>
      <Script id="checkout">
        {`
                window.history.pushState({},"",location.href);
                window.onpopstate = function(){
                    setTimeout(function () {
                        location.href = '${CHECKOUT}';
                    },1);
                };
                `}
      </Script>
      <Script id="scr_650a1e30f39c31000aba670c">
        {`var s=document.createElement("script");s.src="https://scripts.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a1e30f39c31000aba670c/player.js",s.async=!0,document.head.appendChild(s);`}
      </Script>
      <Script id="scr_650a1e39f39c31000aba670f">
        {`var s=document.createElement("script");s.src="https://scripts.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/650a1e39f39c31000aba670f/player.js",s.async=!0,document.head.appendChild(s);`}
      </Script>
    </>
  );
};

export default Discount;
