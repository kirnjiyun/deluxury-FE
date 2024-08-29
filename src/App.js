// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

// import AppRouter from "./routes/AppRouter";
// import AppLayout from "./layout/AppLayout";

// export default function App() {
//     return (
//         <AppLayout style={{ height: "100vh" }}>
//             <AppRouter />
//         </AppLayout>
//     );
// }
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./routes/AppRouter";
import AppLayout from "./layout/AppLayout";

export default function App() {
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const savedState = localStorage.getItem("isPlaying") === "true";
        setIsPlaying(savedState);
    }, []);

    useEffect(() => {
        localStorage.setItem("isPlaying", isPlaying);

        const bgm = document.getElementById("bgm");
        if (isPlaying) {
            bgm.play();
        } else {
            bgm.pause();
        }
    }, [isPlaying]);

    const toggleMusic = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <AppLayout style={{ height: "100vh" }}>
            <audio id="bgm" loop>
                <source
                    src="src/music/crosstown-funk-205896.mp3"
                    type="audio/mpeg"
                />
            </audio>
            <button onClick={toggleMusic} style={buttonStyle}>
                {isPlaying ? "Pause Music" : "Play Music"}
            </button>
            <AppRouter />
        </AppLayout>
    );
}

const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};
