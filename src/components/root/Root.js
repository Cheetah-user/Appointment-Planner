import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

function Root() {
    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS} className='ColorBack'>
                Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS} className='ColorBack'>
                Appointments
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;