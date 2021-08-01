import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

{/** material를 이용한 css style 설정 */}

const styles = theme => ({
  root : {
    width: '100%', marginTop: theme.spacing.unit * 3, overflowX:"auto"
   },
    table : {
      minWidth: 768
    } 
})
const customers = [
  {
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://placeimg.com/64/64/2',
    'name':'김개똥',
    'birthday':'880512',
    'gender':'남자',
    'job': '직장인'
    },
    {
      'id': 3,
      'image': 'http://placeimg.com/64/64/3',
      'name':'이슬이',
      'birthday':'941125',
      'gender':'여자',
      'job': '대학생'
      },
]


class App extends Component {
  render() {
    const { classes } = this.props; {/** 위에 정의한 styles를 적용하기 위한 classes변수 선언*/}
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customers.map(t => {
           return (<Customer  key={t.id}  id = {t.id}  image = {t.image}  name = {t.name}
                    birthday={t.birthday}  gender={t.gender}  job={t.job} />);
    }) }
          </TableBody>
        </Table>
    
    </Paper>
    )    
}}

export default withStyles (styles) (App);
{/** withStyles를 적용하기 위해 내보내기 설정 */}
