import MDEditor from "@uiw/react-md-editor";
import { memo } from "react";

interface StyledMDEditorProps {
  source: string;
}

const StyledMDEditorBase = ({ source }: StyledMDEditorProps) => {
  return (
    <MDEditor.Markdown
      source={source}
      style={{
        padding: 12,
        maxWidth: 200,
        overflow: "auto",
        backgroundColor: "#403D39",
        flexDirection: "column",
        alignItems: "center",
      }}
    />
  );
};

export const StyledMDEditor = memo(StyledMDEditorBase);
