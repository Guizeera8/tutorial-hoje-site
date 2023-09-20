import { type FC } from "react";

interface NumberEvaluationProps {
  number?: number;
}

export const NumberEvaluation: FC<NumberEvaluationProps> = ({ number }) => {
  return (
    <div
      className="bg-center bg-cover"
      style={{
        position: "absolute",
        top: "5px",
        left: "0px",
        padding: "8px 16px",
        zIndex: "1",
        borderRadius: "14px",
      }}
    >
      <div
        className="d-flex gap-1 p-2 bg-white shadow-lg"
        style={{
          boxShadow: "0px 0px 15px rgba(27, 32, 42, 0.15)",
          borderRadius: "8px",
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgb(234, 179, 8)"
          aria-hidden="true"
          style={{
            width: "16px",
            height: "16px",
            color: "rgb(234, 179, 8)",
          }}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span
          className="text-sm text-center font-weight-bold"
          style={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            color: "rgb(148, 163, 184)",
          }}
        >
          {number ?? 0} avaliações
        </span>
      </div>
    </div>
  );
};

export default NumberEvaluation;
