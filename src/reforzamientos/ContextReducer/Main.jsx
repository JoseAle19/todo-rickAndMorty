import { ProviderContextUser } from "./context/ContextUser"
import {App } from "../App";
export const Main = () => {
  return (
    <ProviderContextUser>
        <App/>
    </ProviderContextUser>
  )
}
