import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    position: 'relative'
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 20,
    background: '#3f51b5',
    borderRadius: '50%',
    outline: 'none',
    width: 45,
    height: 45,
    boxShadow: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: '20px 10px',
    maxWidth: 1200,
    width: '100%',
    textAlign: 'left',
    fontSize: 20
  }
}));
export default function Search() {
  const classes = useStyles();
  return (
    <div>
      <form action="#" className={classes.form}>
        <input type="text" placeholder="Find gist you need..." className={classes.input} />
        <button type="submit" className={classes.button}>
            <SearchIcon style={{ color: '#fff' }} />
        </button>
      </form>
    </div>
  );
}
