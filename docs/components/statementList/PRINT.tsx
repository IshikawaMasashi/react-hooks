import * as React from "react";
import { useEffect, useRef } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { _Console } from "../../../src";
import { compile2 } from "../../../src";
import { VirtualMachine } from "../../../src";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import SyntaxHighlighter from "../SyntaxHighlighter";

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
type Props = {};

// コンポーネントを定義
function PRINT({  }: Props) {
  // ここでクラス名を取得
  const classes = useStyles({});

  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const consRef = useRef<_Console>();
  const virtualMachineRef = useRef<VirtualMachine>();
  const refCanvas = useRef<HTMLCanvasElement>(null);

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // setRowHeights(createRowHeights());

    const code = editorRef.current!.getValue();
    const quickBasicProgram = compile2(code);
    if (quickBasicProgram.errors.length === 0) {
      virtualMachineRef.current.run(quickBasicProgram, false);
      q;
    }
  }

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.layout();
    }
  });

  useEffect(() => {
    ensureEditor();

    if (!refCanvas.current) {
      return;
    }

    if (!consRef.current) {
      consRef.current = new _Console(refCanvas.current);
    }

    if (!virtualMachineRef.current) {
      virtualMachineRef.current = new VirtualMachine(consRef.current);
    }

    return () => {
      editorRef.current!.dispose();
    };
  }, []);

  const ensureEditor = () => {
    if (editorRef.current) {
      return;
    }
    const options = Object.assign(
      {
        value: `PRINT "Hello World"`,
        theme: "vs-dark",
        minimap: {
          enabled: false
        },
        fontWeight: "bold",
        renderLineHighlight: "none"
      },
      {}
    );
    if (containerRef.current!.lastChild) {
      containerRef.current!.removeChild(containerRef.current!.lastChild);
    }

    editorRef.current = monaco.editor.create(
      containerRef.current!,
      options as any
    );
    // editorRef.current.onDidFocusEditorText(() => enableEditorScroll());
    // registerActions();
    console.info("Created a new Monaco editor.");

    // setupSyntaxWorker();
    // setCompilerOptions();

    editorRef.current.onDidChangeModelContent(e => {
      if (e.isFlush) {
        return;
      }
      // handleChange();
    });
    // editorRef.current.onDidChangeModel(() => {
    //   handleChange();
    // });

    // editorRef.current.onMouseDown(e => {
    //   const { lineNumber, column } = editorRef.current.getPosition(); //e.position;

    //   if (viewRef.current) {
    //     viewRef.current.setPosition(lineNumber, column);
    //   }
    //   // dispatch({
    //   //   type: AppActionType.CURSOR_POSITION_CHANGED,
    //   //   line: lineNumber,
    //   //   column: column
    //   // } as CursorPositionChangedAction);
    // });

    editorRef.current.onKeyUp(e => {
      // const { lineNumber, column } = editorRef.current.getPosition(); //e.position;
      // if (viewRef.current) {
      //   viewRef.current.setPosition(lineNumber, column);
      // }
      // dispatch({
      //   type: AppActionType.CURSOR_POSITION_CHANGED,
      //   line: lineNumber,
      //   column: column
      // } as CursorPositionChangedAction);
    });
  };

  const codeString = `PRINT "HELLO"`;
  return (
    <Paper className={classes.root}>
      <Typography variant="h6" noWrap>
        PRINT Statement
      </Typography>
      <hr></hr>
      <SyntaxHighlighter language="basic" code={codeString}></SyntaxHighlighter>
      <hr></hr>
      <Grid container spacing={2}>
        <Grid item xs>
          <Button
            variant="contained"
            className={classes.button}
            onClick={onClick}
          >
            Run
          </Button>
        </Grid>
      </Grid>

      <div style={{ display: "flex" }}>
        <div
          style={{ height: "400px", width: "400px", margin: "6px" }}
          ref={containerRef}
        />
        <canvas
          ref={refCanvas}
          className="quick-basic-console-dialog__canvas"
        />
      </div>
      <Typography variant="h6" noWrap>
        PRINT
      </Typography>
      <hr></hr>
      <p>
        PRINT is QBasic's text output function. PRINT is a QBasic function that
        requires arguments. The argument in the Hello World program we just ran
        were the words "Hello World". So, PRINT is the function and "Hello
        World" is the argument we pass-to the function.
      </p>
      <p>PRINT [Text to screen]</p>
    </Paper>
  );
}

export default PRINT;
