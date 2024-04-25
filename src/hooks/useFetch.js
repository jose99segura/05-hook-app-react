import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async() => {

        setLoadingState();
        const resp = await fetch(url);

        // Sleep 2s
        await new Promise(resolve => setTimeout(resolve, 2000));

        if( !resp.ok ) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: resp.statusText
            });
            return;
        }

        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        })

        // Manejo del Caché

    }
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }

}
