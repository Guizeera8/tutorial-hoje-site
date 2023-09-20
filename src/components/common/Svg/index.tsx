import React, { type FC } from "react";

interface SVGComponentProps {
  svgString: string;
}

export const SVGComponent: FC<SVGComponentProps> = ({ svgString }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: svgString }} />
    </div>
  );
};

export default SVGComponent;
