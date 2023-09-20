"use client";

import React, { type FC } from "react";
import Image from "next/image";
import Script from "next/script";
import ReactLoading from "react-loading";

import { NumberEvaluation } from "@/components/common/Rating/NumberEvaluation";
import { Rating } from "@/components/common/Rating";

import useAnnouncementController from "./announcementController";
import { formatCents } from "@/services/currency";

import "./styles.css";
import { PRICE_DEFAULT } from "@/config";

export const Announcement: FC = () => {
  const { open, itemPubli, htmlCode } = useAnnouncementController();

  if (!itemPubli) {
    return (
      <div className="mt-4" style={{ margin: "0 auto", display: "table" }}>
        <ReactLoading
          type="spin"
          color={"#31A6E8FD"}
          height="60px"
          width="60px"
        />
      </div>
    );
  }

  return (
    <>
      <div className="justify-content-center mt-4">
        <div className="col-sm-12">
          {htmlCode !== null ? (
            <div className="rounded overflow-hidden flex video-container">
              <NumberEvaluation number={itemPubli?.avaliations} />
              <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
            </div>
          ) : (
            <div
              className="rounded overflow-hidden flex"
              style={{
                width: "306px",
                minHeight: "306px",
                backgroundColor: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0px 0px 12px 2px rgba(0, 0, 0, 0.2)",
                marginTop: "20px",
                backgroundImage: `url('${itemPubli?.image ?? ""}')`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                margin: "0 auto",
                position: "relative",
              }}
            >
              <NumberEvaluation number={itemPubli?.avaliations} />
            </div>
          )}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              padding: "8px 16px",
              width: "306px",
              borderBottom: "1px solid rgb(235, 236, 237)",
              margin: "0 auto",
            }}
          >
            <Image
              src={itemPubli?.logo ?? ""}
              alt={itemPubli?.name ?? ""}
              height={40}
              width={40}
              style={{
                borderRadius: "11px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                marginRight: "auto",
                marginLeft: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5rem",
                  color: "rgb(100, 116, 139)",
                }}
              >
                {itemPubli?.name}...
              </span>
              <span
                style={{
                  fontSize: "0.8rem",
                  lineHeight: "1.25rem",
                  color: "rgb(148, 163, 184)",
                }}
              >
                Por {itemPubli?.name}...
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: "12px",
                paddingRight: "12px",
                height: "30px",
                backgroundColor: open
                  ? "rgb(34, 197, 94)"
                  : "rgb(220, 252, 231)",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: open ? "rgb(220, 252, 231)" : "rgb(34, 197, 94)",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                + {formatCents(PRICE_DEFAULT)}
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "10px 16px",
              minHeight: "70px",
            }}
          >
            <span
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.25rem",
                color: "rgb(148, 163, 184)",
                textAlign: "center",
              }}
            >
              Qual sua nota para este anúncio?
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Rating />
              </div>
            </div>
          </div>
        </div>
      </div>
      {itemPubli?.video && (
        <Script id={`vid_${itemPubli?.video ?? ""}`}>
          {`s=document.createElement("script");s.src="https://scripts.converteai.net/673307d1-3279-4b4f-a674-d0255c469790/players/${
            itemPubli?.video ?? ""
          }/player.js",s.async=!0,document.head.appendChild(s);`}
        </Script>
      )}
    </>
  );
};

export default Announcement;
