import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = theme => makeStyles({
  table: {
    minWidth: 670,
    maxWidth: 500,
  },
  root: {
    flexGrow: 1,
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#c1e4e9',
  },
}))(TableCell);

function createData(name, period, level) {
  return { name, period, level };
}

const rowsDB = [
  createData('MariaDB', '5ヶ月', 'インストールから簡単なテーブル作成が可能'),
  createData('MySQL', '1年1ヶ月', 'インストールから簡単なテーブル作成が可能'),
]

const rowsLibFW = [
  createData('React', '5ヶ月', '問題なく日常的に利用できる'),
  createData('Codeigniter', '5ヶ月', '簡単な利用が可能'),
  createData('jQuery', '5ヶ月', '問題なく日常的に利用できる'),
]

const rowsDevLang = [
  createData('JavaScript', '2年9ヶ月', '問題なく日常的に利用できる'),
  createData('PHP(5系/7系)', '1年6ヶ月', '簡単なプログラミングが可能'),
  createData('HTML5', '2年4ヶ月', '問題なく日常的に利用できる'),
  createData('CSS3', '2年4ヶ月', '問題なく日常的に利用できる'),
  createData('Ruby', '5ヶ月', '簡単なプログラミングが可能'),
]

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12} sm={6} className="center">
        <p>言語</p>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="skill table">
            <TableHead>
              <TableRow>
                <StyledTableCell>技術</StyledTableCell>
                <StyledTableCell align="left">開発年数</StyledTableCell>
                <StyledTableCell align="left">レベル</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDevLang.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.period}</TableCell>
                  <TableCell align="left">{row.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6} className="center">
        <p>ライブラリ・FW</p>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="skill table">
            <TableHead>
              <TableRow>
                <StyledTableCell>技術</StyledTableCell>
                <StyledTableCell align="left">開発年数</StyledTableCell>
                <StyledTableCell align="left">レベル</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsLibFW.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.period}</TableCell>
                  <TableCell align="left">{row.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6} className="center">
        <p>DB</p>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="skill table">
            <TableHead>
              <TableRow>
                <StyledTableCell>技術</StyledTableCell>
                <StyledTableCell align="left">開発年数</StyledTableCell>
                <StyledTableCell align="left">レベル</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDB.map(row => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.period}</TableCell>
                  <TableCell align="left">{row.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}