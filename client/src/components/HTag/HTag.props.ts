import {ReactNode} from "react";
export interface HTagProps {
    tag: 'h1'| 'h2' | 'h3' | 'h2Grey',
    color?:'grey'
    children: ReactNode
}