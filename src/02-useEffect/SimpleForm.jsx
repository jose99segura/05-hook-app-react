import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'jose',
        email: 'jose@gmail.com'
    });

    // Desestructuramos el formState
    const { username, email } = formState;

    const onInputChante = ({target}) => {
      const { name, value } = target;
      setFormState({
        // Mantenemos el estado anterior
        ...formState,
        [ name ]: value
      });
    }

    // useEffect( () => {
    //   console.log('formState Cambio');
    // }, [formState]);

    // useEffect( () => {
    //   console.log('email changed');
    // }, [email]);
    

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text" 
            className="form-control"
            placeholder="Nombre"
            name="username"
            value={ username }
            onChange={ onInputChante }
        />
        <input type="text"
            className="form-control mt-2"
            placeholder="Email"
            name="email"
            value={ email }
            onChange={ onInputChante }
        />

        {
          (username === 'jose2') && <Message></Message>
        }


    </>
  )
}
