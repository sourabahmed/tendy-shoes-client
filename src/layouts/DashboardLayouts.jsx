import { Outlet } from "react-router-dom"
import DashboardDrawer from "../components/dashboard/DashboardDrawer"


function DashboardLayouts() {
  return (
    <>
    <DashboardDrawer />
    <Outlet></Outlet>
    </>
  )
}

export default DashboardLayouts