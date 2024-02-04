import React from "react";

export const handleTogglePassword = (setData: React.Dispatch<React.SetStateAction<boolean>>) => {
    setData((prev: boolean) => !prev);
};