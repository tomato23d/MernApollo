import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ME, QUERY_USER } from '../utils/queries';


const Welcome = () => {
  const { userId } = useParams();
  const { loading, data } = useQuery(
    userId ? QUERY_USER : QUERY_ME,
    {
      variables:  { _id: userId },
    }
  );


  const profile = data?.profile || data?.me || {};
console.log("hello");
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {profile.username} now reads those books:
      </h2>
     
      </div>
  );
};

export default Welcome;
