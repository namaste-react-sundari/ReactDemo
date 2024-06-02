import { useState, useEffect } from 'react';

const User = ({ name }) => {
  let [count, setCount] = useState(0);
  // {setCount(2);}
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: India</h3>
      <h3>Contact: @muralikrishnas05</h3>
    </div>
  );
};

export default User;
