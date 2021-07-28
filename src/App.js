import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';


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
    return(
      <div>
    { customers.map(t => {
      return (
        <Customer
        key={t.id}
        id = {t.id}
        image = {t.image}
        name = {t.name}
        birthday={t.birthday}
        gender={t.gender}
        job={t.job}
      />);
    })
    }
    </div>
    )    
}}

export default App;
