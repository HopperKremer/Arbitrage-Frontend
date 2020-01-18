import React, {useState} from 'react';
import './LogPage.css';
import autobahn from 'autobahn-browser';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';


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

  const [name, setName] = React.useState('Cat in the Hat');
  const [logs, setLogs] = useState([]);

  const handleChange = event => {
    setName(event.target.value);
  };

  
  connection.onopen = function (session) {
    session.subscribe('com.pdubscryptoworld.logs', (args) => {
      setLogs(prevLogs => {
        const newLog = args[0]['message'];
        let newLogs = prevLogs;
        let match_found = false;
        console.log(newLog);

        for (let i = 0; i < newLogs.length; i++) {
          if (newLogs[i] === undefined) {
            newLogs = [];
            break;
          }

          if (newLogs[i]['message'] === newLog['message']) {
            newLogs[i] = newLog;
            break;
          }
        }

        if (!match_found) {
          newLogs = [...newLogs, newLog];
        }

        return [...newLogs]

      });
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
              onChange={handleChange}
              variant="outlined"
            />
        </form>
      </div>
  );
}

export default LogPage;