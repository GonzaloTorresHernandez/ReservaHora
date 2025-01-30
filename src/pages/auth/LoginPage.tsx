import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuthStore } from '../../hooks';

interface Inputs {
  email: string;
  password: string;
}

const LoginPage = () => {

  const { errorMessage, startSignInWithEmailPassword } = useAuthStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    startSignInWithEmailPassword(data);
    return console.log(data)
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Inicia sesión</h5>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
          />
          {errors.email && <span>Debe ingresar un email </span>}
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
              {errorMessage && <span> Credenciales Invalidas </span>}
              {/* <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  /> */}
            </div>
            {/* <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
          </div>
          <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">¿Perdiste tu contraseña?</a>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Inicie sesión en su cuenta</button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          ¿No estás registrado? <Link to={'/auth/register'} className="text-blue-700 hover:underline dark:text-blue-500">Crear una cuenta</Link>
        </div>
      </form>
    </>
  )
}

export default LoginPage;
