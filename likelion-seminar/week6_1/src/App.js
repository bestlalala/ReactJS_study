import React, {useRef} from 'react';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'sookmyung',
        email: 'noonsong@sookmyung.ac.kr'
    },
    {
        id: 2,
        username: 'mutsa',
        email: 'likelionswu@likelion.org'
    },
    {
        id: 3,
        username: 'yeonsu',
        email: 'yeonsu@xample.com'
    }
];

const nextId = useRef(4);
const onCreate = () => {
  // 나중에 구현할 배열에 항목을 추가하는 로직
  nextId.current ++;
}
  return (
    <>
      <InputSample />
      <br/>
      <hr/>
      <UserList users={users} />
    </>
  );
}

export default App;
