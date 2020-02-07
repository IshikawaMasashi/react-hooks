import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import QuickBasic from "./quickBasic";

import { EXAMPLES } from "../../src";
// import { Card, CardContent, CardActions, Button } from "@material-ui/core";

// スタイルを定義
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(6),
      width: "100%"
    },
    title: {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    paper: {
      padding: 18
    },
    card: {
      minWidth: 275
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    // title: {
    //   fontSize: 14
    // },
    pos: {
      marginBottom: 12
    }
  })
);

// props の型を定義
type Props = {};

// コンポーネントを定義
export default function About({}: Props) {
  // ここでクラス名を取得
  const classes = useStyles({});

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Typography variant="h4" noWrap>
          About
        </Typography>
        <hr></hr>
        <Typography variant="h6">
          <p>QuickBasic are programming languages for beginners.</p>
        </Typography>
        <QuickBasic value={EXAMPLES.NIBBLES} editorWidth={640} />
      </Paper>
    </React.Fragment>
  );
}
