import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuthStore } from '../../hooks';

interface Inputs {
  displayName: string
  email: string;
  password: string;
}

const RegisterPage = () => {

  const { errorMessage, startCreatingUserWithEmailPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    startCreatingUserWithEmailPassword(data);
    return console.log(data)
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Registrarse</h5>
        <div>
          <label htmlFor="displayName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre y apellido</label>
          <input
            type="text"
            {...register('displayName', { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="gonzalo torres"
          />
          {errors.displayName && <span>Debe ingresar su nombre completo</span>}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
          />
          {errors.email && <span>Debe ingresar un email</span>}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 4 })}
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
          {errors.password && <span>Debe ingresar la contraseña</span>}
        </div>

        <div className="flex items-start">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              {errorMessage && <span> Ocurrio un error inesperado al intentar registrae </span>}
            </div>
          </div>
        </div>

        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registar cuenta</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          ¿Estás registrado? <Link to={'/auth/login'} className="text-blue-700 hover:underline dark:text-blue-500">Iniciar sesión</Link>
        </div>
      </form>
    </>
  )
}

export default RegisterPage;
