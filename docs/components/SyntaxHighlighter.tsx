import * as React from "react";

import { Prism } from "react-syntax-highlighter";

import okaidia from "react-syntax-highlighter/dist/esm/styles/prism/okaidia";

type Props = { code: string; language: string };

function SyntaxHighlighter({ code, language }: Props) {
  return (
    <Prism language={language} style={okaidia}>
      {code}
    </Prism>
  );
}

export default SyntaxHighlighter;
