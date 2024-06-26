import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ToastContainer } from "react-toastify";

export const StyledToastContainer = styled(ToastContainer)`
    top: 100px;
    right: 10px;

    .Toastify__toast {
        background-color: rgba(0, 0, 0, 0.8) !important;
        color: #fff;
        font-size: 16px;
        border-radius: 0px !important;
    }

    .Toastify__close-button {
        color: #fff !important;
    }

    .Toastify__progress-bar {
        background: linear-gradient(
            270deg,
            rgba(247, 247, 255, 1) 0%,
            rgba(10, 10, 10, 1) 100%
        );
    }
`;
