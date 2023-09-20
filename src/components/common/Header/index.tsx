"use client";

import React, { type FC } from "react";
import Image from "next/image";

import { formatCents } from "@/services/currency";
interface HeaderProps {
  price: number;
}

export const Header: FC<HeaderProps> = ({ price = 0 }) => {

  return (
    <div
      className="d-flex flex-row justify-content-between align-items-center"
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "white",
        borderRadius: "16px",
        marginTop: "20px",
        padding: "12px",
        boxShadow: "0px 0px 12px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="col-auto">
        <Image
          src="/publi-money.png"
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "93px", height: "auto" }}
          alt="Publi Money"
        />
      </div>
      <div className="col-auto">
        <div
          className="d-flex align-items-center justify-content-center p-2 rounded-2"
          style={{ backgroundColor: "rgb(14, 166, 233)" }}
        >
          <span
            className="text-white font-weight-bold"
            style={{ fontWeight: "bold" }}
          >
            {formatCents(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
