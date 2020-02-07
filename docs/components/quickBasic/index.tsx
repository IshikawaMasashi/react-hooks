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
import Monaco from "../monaco";

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
type Props = { value: string; editorWidth?: number; editorHeight?: number };

// コンポーネントを定義
export default function QuickBasic(props: Props) {
  const { value, editorWidth = 400, editorHeight = 400 } = props;
  // ここでクラス名を取得
  const classes = useStyles({});

  const model = monaco.editor.createModel(value);
  monaco.editor.setModelLanguage(model, "quickbasic");

  const consRef = useRef<_Console>();
  const virtualMachineRef = useRef<VirtualMachine>();
  const refCanvas = useRef<HTMLCanvasElement>(null);

  function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // const code = editorRef.current!.getValue();
    const code = model.getValue();
    const quickBasicProgram = compile2(code);
    if (quickBasicProgram.errors.length === 0) {
      virtualMachineRef.current.run(quickBasicProgram, false);
    }
    for (let i = 0; i < quickBasicProgram.errors.length; i++) {
      consRef.current.print(quickBasicProgram.errors[i] + "\n");
    }
  }

  useEffect(() => {
    if (!refCanvas.current) {
      return;
    }

    if (!consRef.current) {
      consRef.current = new _Console(refCanvas.current);
    }

    if (!virtualMachineRef.current) {
      virtualMachineRef.current = new VirtualMachine(consRef.current);
    }

    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
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
        <Monaco model={model} width={editorWidth} height={editorHeight} />
        <canvas
          ref={refCanvas}
          className="quick-basic-console-dialog__canvas"
        />
      </div>
    </React.Fragment>
  );
}
