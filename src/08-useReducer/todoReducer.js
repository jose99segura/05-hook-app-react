

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case 'ABC':
            throw new Error('No se puede hacer esto');
    
        default:
            return initialState;
    }

}