import { FC, PropsWithChildren } from "react";
import Navbar from "components/Navbar/Navbar";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { changeSearch, zeroingSearch } from "store/action-creators/search";

interface PageWrapProps {
    contentClass?: string
}

const PageWrap: FC<PropsWithChildren<PageWrapProps>> = ({ children, contentClass }) => {  
    const { keyword } = useTypedSelector(state => state.search); 
    const classes = [contentClass, keyword ? 'bright' : '']; 
    const dispatch = useDispatch();

    const onClickWrapper = () => {
        dispatch(changeSearch(''));
        dispatch(zeroingSearch());
    }

    return (
        <div className="page_wrap" onClick={onClickWrapper}>
            <Navbar />

            <div style={{flex: "1 0 auto"}} className={classes.join(' ')}>
                { children }
            </div>
            
        </div>
    )
}

export  { PageWrap }

