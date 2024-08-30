import React, { useEffect } from "react";
import { UploadButton } from "./CloudinaryUploadWidgetStyles";

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOADPRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

const CloudinaryUploadWidget = ({ uploadImage }) => {
    useEffect(() => {
        const cloudinary = window.cloudinary;
        const myWidget = cloudinary.createUploadWidget(
            {
                cloudName: CLOUDNAME,
                uploadPreset: UPLOADPRESET,
                sources: ["local", "url", "camera"],
                multiple: false,
                defaultSource: "local",
                styles: {
                    palette: {
                        window: "#FFFFFF",
                        sourceBg: "#F4F4F5",
                        windowBorder: "#90A0B3",
                        tabIcon: "#0078FF",
                        inactiveTabIcon: "#69778A",
                        menuIcons: "#0078FF",
                        link: "#0078FF",
                        action: "#339933",
                        inProgress: "#0078FF",
                        complete: "#339933",
                        error: "#cc0000",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                    },
                    fonts: {
                        default: null,
                        "'Fira Sans', sans-serif": {
                            url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                            active: true,
                        },
                    },
                },
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                    uploadImage(result.info.secure_url);
                    myWidget.close();
                }
            }
        );

        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }, [uploadImage]);

    return (
        <UploadButton id="upload_widget" className="ml-2" type="button">
            이미지 +
        </UploadButton>
    );
};

export default CloudinaryUploadWidget;
