import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id:'u1',
      name:'Adam Smith',
      image:'https://fwcb.cfans.umn.edu/sites/fwcb.cfans.umn.edu/files/photo_a_landon.jpg',
      places:3
    }
  ];
  return <UsersList items={USERS}/>;
};

export default Users;
 