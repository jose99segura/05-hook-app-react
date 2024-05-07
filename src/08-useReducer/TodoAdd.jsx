import { useForm } from '../hooks/useForm'


export const TodoAdd = ({ onNewTodo }) => {

    const {description, formState, onInputChange, onResetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        onNewTodo( newTodo );

        onResetForm();

    }

  return (
    <>
    {/* { id, description, done } */}
    <form onSubmit={ onFormSubmit }>
        <input 
            type="text" 
            placeholder="¿Que hay que hacer?" 
            className="form-control" 
            name='description'
            value={ description }
            onChange={ onInputChange }
        />
        <button 
            className="btn btn-outline-primary mt-1 btn-block"
        >
            Agregar
        </button>
    </form>
    </>
  )
}
