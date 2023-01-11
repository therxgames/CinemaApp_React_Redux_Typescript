import { FC, PropsWithChildren } from "react";

interface PageWrapProps {
    contentClass?: string
}

const BootstrapBlockWrap: FC<PropsWithChildren<PageWrapProps>> = ({ children, contentClass }) => {        
    return (
        <div className={contentClass}>
            <div className="container">
                <div className="row">
                    { children }
                </div>
            </div>
        </div>
    )
}

export  { BootstrapBlockWrap }

