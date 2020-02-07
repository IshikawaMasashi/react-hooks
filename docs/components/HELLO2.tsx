import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import { VirtualList, ItemStyle } from "../../src";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import Button from "@material-ui/core/Button";

import { _Console } from "../../src";
import { compile2 } from "../../src";
import { VirtualMachine } from "../../src";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const { useEffect, useRef } = React;

const highlighterStyles = require("react-syntax-highlighter/dist/esm/styles/prism");

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
  title?: string;
};

// コンポーネントを定義
function Example2({ title }: Props) {
  // ここでクラス名を取得
  const classes = useStyles({});

  const itemCount = 100000;

  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();
  const consRef = useRef<_Console>();
  const virtualMachineRef = useRef<VirtualMachine>();
  const refCanvas = useRef<HTMLCanvasElement>(null);

  const [itemSize, setItemSize] = React.useState<number | number[]>(50);
  const handleChange = (event: any, newValue: number | number[]) => {
    setItemSize(newValue < 18 ? 18 : newValue);
  };

  function createRowHeights() {
    const heights = [];
    for (let i = 0; i < itemCount; ++i) {
      heights.push(Math.round(Math.random() * 130 + 20));
    }
    return heights;
  }
  const [rowHeights, setRowHeights] = React.useState<number[]>(
    createRowHeights()
  );

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // setRowHeights(createRowHeights());

    const code = editorRef.current!.getValue();
    const quickBasicProgram = compile2(code);
    if (quickBasicProgram.errors.length === 0) {
      virtualMachineRef.current.run(quickBasicProgram, false);
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

  const codeString = [
    'PRINT "This line will be erased"',
    "CLS",
    'PRINT "Hello";',
    'PRINT " World",',
    'PRINT "Hello Jupiter"',
    'PRINT "Good Bye",,"For";" Now"',
    "PRINT 1,2,3,4,5"
  ].join("\n");

  const ensureEditor = () => {
    if (editorRef.current) {
      return;
    }
    const options = Object.assign(
      {
        value: codeString,
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

  return (
    <div className={classes.root}>
      <Typography variant="h6" noWrap>
        2. HELLO.BAS
      </Typography>
      <hr></hr>
      <SyntaxHighlighter
        style={highlighterStyles.okaidia}
        language="basic"
      >
        {codeString}
      </SyntaxHighlighter>
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
        PRINT, Commas, Semicolons and CLS
      </Typography>
      <hr></hr>
      <Typography variant="h6">
        <p>This is what the program output should look like:</p>
      </Typography>
      <SyntaxHighlighter
     
        style={highlighterStyles.okaidia}
      >{`Hello World   Hello Jupiter
Good Bye      For Now
1             2             3              4              5`}</SyntaxHighlighter>
      <Typography variant="h6">
        <p>
          The first line of 2 HELLO.BAS outputs "This line will be erased." to
          the screen. However, in the second line, the CLS command clears the
          screen immediately after. So, it will only flash momentarily. The text
          "Hello Jupiter" should line up with '2' under it. More than one comma
          can be used consecutively. In this example, after "Good Bye" two
          commas are used to move "For Now" over two tab columns. "For Now"
          should line up with '3'.
        </p>
      </Typography>
    </div>
  );
}

export default Example2;
