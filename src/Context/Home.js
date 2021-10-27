import React, { createContext, useContext, useEffect, useState } from 'react'
import { AppContext } from '.'
import { DefaultLayout, CreateChainForm, AccessExistingChain } from '../Components/HomePageItems'

export const HomeContext = createContext()

export const HomeProvider = ({ children }) => {

    const { AppComponent } = useContext(AppContext)
    const [defaultKey] = useState('DefaultLayout')
    const [HomeComponent, setHomeComponent] = useState(<DefaultLayout key={`Home-${defaultKey}`} />)

    useEffect(() => {
        if (AppComponent.key === 'Home') updateHomeComponent(defaultKey)
    }, [AppComponent, defaultKey])

    const updateHomeComponent = (componentName) => {
        // setTimeout(() => {
        switch (componentName) {
            case defaultKey:
                setHomeComponent(<DefaultLayout key={`Home-${componentName}`} />)
                break;

            case 'createChain':
                setHomeComponent(<CreateChainForm key={componentName} />)
                break;

            case 'accessExistingChain':
                setHomeComponent(<AccessExistingChain key={componentName} />)
                break;

            default:
                break;
        }
        // }, 100)
    }

    console.log('rendering: HomeProvider')

    return (
        <HomeContext.Provider value={{ HomeComponent, updateHomeComponent }}>
            {children}
        </HomeContext.Provider>
    )
}