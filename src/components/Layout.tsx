import { Outlet } from "react-router-dom"
import { Navbar } from "./Navigation/Navbar"

interface Props {
    children? : React.ReactNode
}

const Layout = ({children}: Props) => {
return (
    <>
    <Navbar/>
    <Outlet/>
    {children}
    </>
)
}

export default Layout