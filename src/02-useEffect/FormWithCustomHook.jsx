import { useForm } from "../hooks/useForm"


export const FormWithCustomHook = () => {

    const { formState, onInputChante, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

  return (
    <>
        <h1>Formulario con Custom Hook</h1>
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

        <input type="password"
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChante }
        />

        <button onClick={ onResetForm } className="btn btn-secondary mt-2">
            Borrar
        </button>


    </>
  )
}
