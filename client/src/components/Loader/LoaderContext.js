import React, { createContext, useState } from 'react';
import Loader from './Loader';
export const LoaderContext = createContext();
export const LoaderProvider = ({ children }) => {
    const [loaderOpen, setLoaderOpen] = useState(false);
    return (
        <LoaderContext.Provider value={{ loaderOpen, setLoaderOpen }}>
            <Loader open={loaderOpen} />
            {children}
        </LoaderContext.Provider>
    )
}