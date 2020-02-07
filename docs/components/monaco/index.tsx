import * as React from "react";
import { useEffect, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { _Console } from "../../../src";
import { compile2 } from "../../../src";
import { VirtualMachine } from "../../../src";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import { QuickBASIC } from "../../../src";
// スタイルを定義
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6)
    },
    title: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    paper: {
      padding: 18
    },
    button: {
      margin: theme.spacing(1)
    }
  })
);

// props の型を定義
type Props = {
  model: monaco.editor.ITextModel;
  width: number;
  height: number;
};

// コンポーネントを定義
export default function Monaco(props: Props) {
  const { model, width, height } = props;
  // ここでクラス名を取得
  const classes = useStyles({});

  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const consRef = useRef<_Console>();

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  });

  useEffect(() => {
    // QuickBASIC
    // monaco.languages.onLanguage("quickbasic", () => {
    //   monaco.languages.setMonarchTokensProvider(
    //     "quickbasic",
    //     QuickBASIC.MonarchDefinitions
    //   );
    // });
    monaco.languages.register({
      id: "quickbasic"
    });
    monaco.languages.setMonarchTokensProvider(
      "quickbasic",
      QuickBASIC.MonarchDefinitions
    );

    ensureEditor();

    return () => {
      editorRef.current!.dispose();
    };
  }, []);

  const ensureEditor = () => {
    if (editorRef.current) {
      return;
    }
    // const options = Object.assign(
    //   {
    //     theme: "vs-dark",
    //     minimap: {
    //       enabled: false
    //     },
    //     fontWeight: "bold",
    //     renderLineHighlight: "none",
    //     language: "quickbasic"
    //   },
    //   {}
    // );
    if (containerRef.current!.lastChild) {
      containerRef.current!.removeChild(containerRef.current!.lastChild);
    }

    editorRef.current = monaco.editor.create(containerRef.current!, {
      theme: "vs-dark",
      minimap: {
        enabled: false
      },
      fontWeight: "bold",
      renderLineHighlight: "none",
      language: "quickbasic"
    });

    editorRef.current.setModel(model);

    editorRef.current.onDidChangeModelContent(e => {
      if (e.isFlush) {
        return;
      }
    });

    editorRef.current.onKeyUp(e => {});
  };

  return (
    <div
      style={{ height: `${height}px`, width: `${width}px`, margin: "6px" }}
      ref={containerRef}
    />
  );
}
