import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function SharedLayout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}