import { Outlet } from "react-router-dom"

interface Props {
    children? : React.ReactNode
}

const Layout = ({children}: Props) => {
return (
    <>
    <Outlet/>
    {children}
    </>
)
}

export default Layout