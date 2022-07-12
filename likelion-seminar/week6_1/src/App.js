import React, {useRef, useState, useCallback} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;

  const onChange = useCallback(
    e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'sookmyung',
        email: 'noonsong@sookmyung.ac.kr',
        active: true
    },
    {
        id: 2,
        username: 'mutsa',
        email: 'likelionswu@likelion.org',
        active: false
    },
    {
        id: 3,
        username: 'yeonsu',
        email: 'yeonsu@xample.com',
        active: false
    }
]);

const nextId = useRef(4);
const onCreate = useCallback(() => {
  // 나중에 구현할 배열에 항목을 추가하는 로직
  const user = {
    id:nextId.current,
    username,
    email
  };
  setUsers(users.concat(user));

  setInputs({
    username: '',
    email: ''
  });
  nextId.current ++;
}, [users, username, email]);

const onRemove = useCallback(
  id => {
  setUsers(users.filter(user => user.id !== id));
  },
  [users]
);
const onToggle = useCallback(
  id => {
  setUsers(
    users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
      )
  );
  },
  [users]
);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle = {onToggle}/>
    </>
  );
}

export default App;
