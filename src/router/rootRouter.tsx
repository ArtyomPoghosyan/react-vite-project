import { Constact, Login, } from "@/pages"
import Main from "@/pages/main/main"
import { Route, Routes } from "react-router-dom"

export const RootRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="main" element={<Main />}>
                    <Route path="contact" element={<Constact />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </div>
    )
}