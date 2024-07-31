"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ value }: { value: string }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <ReactQuill
      theme="bubble"
      value={value}
      className="pb-10 bg-transparent whitespace-pre-wrap"
    ></ReactQuill>
  );
};