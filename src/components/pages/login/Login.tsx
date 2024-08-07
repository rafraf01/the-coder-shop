import { FormEvent } from 'react'

const Login = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <section className='container mx-auto'>
      <div className='border-2 rounded-xl'>
        <form className='content-center m-10 font-urbanist flex gap-5 justify-center flex-col text-center' onSubmit={(e) => handleSubmit(e)}>
          <h1 className='text-3xl font-semibold'>Login</h1>
          <div>
            <label htmlFor="username">
              <input name="username" type="text" placeholder='Username' className='border px-4 py-2 w-full max-w-96 bg-gray-200/50 outline-none rounded-xl'/>
            </label>
          </div>
         <div>
            <label htmlFor="password">
              <input name="password" type="password" placeholder='Password' className='border px-4 py-2 w-full max-w-96 bg-gray-200/50 outline-none rounded-xl'/>
            </label>
         </div>
         <div className='flex flex-col gap-2 justify-center items-center text-white text-sm mt-5'>
            <input type="submit" value="Login" className='border w-96 max-w-full p-2 bg-blue-900/90 rounded-xl'/>
            <input type="button" value="Sign up" className='border w-96 max-w-full p-2 text-black rounded-xl' />
         </div>
        </form>
      </div>
    </section>
  )
}

export default Login;