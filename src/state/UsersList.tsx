import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserList: React.FC = () => {
  const [name, setName] = useState('');
  const [num, setNum] = useState<number>(0);

  const [user, setUser] = useState<{name: string , age: number}| undefined>();
  // console.log(name);

  const onClick = () => {
    const fondUsers =  users.find((users)=>{
      return users.name === name;
    })
    setUser(fondUsers);
  };
  const Increment =() => {
    setNum((current)=> current+1);

  }
  const OnChangeInput = (event :React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event);

  }

  console.log(num);
  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <button onClick={Increment}>increment</button>
      <div>{user?.name}</div>
      <div>{num}</div>
      <input  onChange={(event) => OnChangeInput(event)} />

    </div>
  );
};

export default UserList;
