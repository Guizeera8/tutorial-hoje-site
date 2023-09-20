import React, { type FC } from "react";

interface WarningProps {
  alert?: boolean;
}

export const Warning: FC<WarningProps> = ({ alert }) => {
  return (
    <div className="container mt-4">
      <div
        className="d-flex flex-row align-items-center justify-content-center"
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: alert ? "rgb(239, 68, 68)" : "rgb(186, 230, 253)",
          borderRadius: "10px",
          marginTop: "20px",
          padding: "12px",
        }}
      >
        <h1
          className="text-center"
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            marginBottom: "0px",
            fontWeight: "500",
            color: alert ? "white " : "#1970F7",
          }}
        >
          {alert ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                aria-hidden="true"
                style={{
                  width: 26,
                  height: 26,
                  marginRight: 8,
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              VOCÊ ACABA DE RECEBER UM DESCONTO PARA ACESSAR O APP!
            </>
          ) : (
            "Avalie o anúncio abaixo para liberar mais!"
          )}
        </h1>
      </div>
    </div>
  );
};

export default Warning;
