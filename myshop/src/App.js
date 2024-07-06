import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRouter from "./routes/AppRouter";
import AppLayout from "./layout/AppLayout";

export default function App() {
    return (
        <AppLayout style={{ height: "100vh" }}>
            <AppRouter />
        </AppLayout>
    );
}
