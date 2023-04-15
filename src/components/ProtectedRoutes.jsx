
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({ path, element }) => {
  const { isAuth, user } = useSelector(state => state.auth);
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to='/signin' state= {{from : location }} replace />  
  );
}
// const ProtectedRoutes = () => {
//     const { isAuth, user } = useSelector(state => state.auth);
//   const location = useLocation();
//   return !isAuth ? <Navigate to='/' state={{ from: location}} replace /> : isAuth && !user ? <Navigate to='/activate' state={{ from: location}} replace /> : <Outlet />
// }

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