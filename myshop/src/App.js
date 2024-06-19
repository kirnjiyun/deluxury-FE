import React from "react";
import AppRouter from "./routes/AppRouter";
import AppLayout from "./layout/AppLayout";

export default function App() {
    return (
        <AppLayout>
            <AppRouter />
        </AppLayout>
    );
}
