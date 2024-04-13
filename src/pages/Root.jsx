import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Modal from "../Components/Modal/Modal";

export default function Root() {

    return (
        <>
        <Modal/>
        <Header/>
        <Outlet />
        <Footer/>
        </>
    )
}