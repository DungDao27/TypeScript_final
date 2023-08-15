import React from 'react'
import { useSelector } from 'react-redux'
import './PageLoadingComponent.css'
import { RootState } from '../../redux/store'

export default function PageLoadingComponent() {
    const {loadingComponent} = useSelector((state: RootState) => state.IsLoadingReducer)
    // console.log(loadingComponent);
    if(loadingComponent){
        return (
            <>
                <div id="preloader">
                    <div className='load' id="loader"></div>
                </div>         
            </>
        )

    }else{
        return ''
    }
}
