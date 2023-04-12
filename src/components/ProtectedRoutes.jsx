
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ path, element }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoutes;



// import React, { useEffect, useState } from 'react'

// const ProtectedRoutes = () => {
    
//     const [ user, setUser ] = useState(null);

//     useEffect(() => {

//     }, [])

//     const unSubscribe = firebase

//   return (
//     <div>ProtectedRoutes</div>
//   )
// }