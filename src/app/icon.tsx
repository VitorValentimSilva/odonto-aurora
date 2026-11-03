import { ImageResponse } from "next/og";

import { BrandMark } from "./og-shared";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon gerado a partir do logo do site.ts. */
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <BrandMark size={64} />
      </div>
    ),
    size,
  );
}
