import React, { useState } from 'react';
import autobahn from 'autobahn-browser';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import './LogPage.css';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      minHeight:"500px",
    },
  },
}));

const connection = new autobahn.Connection({
    url: 'ws://pcw.vapesear.ch/ws',
    realm: 'pdubscryptoworld'
});

connection.open();

function LogPage() {

  const classes = useStyles();
  const name = 'Logs';
  const [logs, setLogs] = useState("Blank");

  const appendToLogs = (message) => {
    setLogs(oldLogs => message + "\n" + oldLogs);
  }

  connection.onopen = function (session) {
    session.subscribe('com.pdubscryptoworld.logs', (args) => {
      appendToLogs(args[0]['message']);
    });
  };

  return (
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
              id="outlined-name"
              style={{width:"100%", minHeight:"500px"}}
              multiline
              label={name}
              value={logs}
              variant="outlined"
            />
        </form>
      </div>
  );
}

export default LogPage;