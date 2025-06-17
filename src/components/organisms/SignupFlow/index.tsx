'use client';

import { JSX, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import BaseFormField from '@/components/molecules/BaseFormField';
import Crud from '@/services/cruds';
import { login } from '@/store/auth';
import { useAppDispatch } from '@/store/hooks';
import { IUser } from '@/types/user';

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

const SignupFlow = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  const onSubmit = async (data: SignupForm) => {
    try {
      setLoading(true);
      // Dados padrões adicionados.
      const res: IUser = await Crud.add('users', {
        ...data,
        role: 'customer',
        avatar: 'https://api.escuelajs.co/api/v1/files/132d.png'
      });

      dispatch(login(res))
      router.push('/');

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center my-20 px-6 mx-auto">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <BaseFormField
                label="Name"
                name="name"
                register={register}
                rules={{ required: 'Required' }}
                error={errors.name}
                inputProps={{ placeholder: 'Your Name' }}
              />
              <BaseFormField
                label="E-mail"
                name="email"
                register={register}
                rules={{ required: 'Required', pattern: /^\S+@\S+$/i }}
                error={errors.email}
                inputProps={{ type: 'email', placeholder: 'you@email.com' }}
              />
              <BaseFormField
                label="Password"
                name="password"
                register={register}
                rules={{
                  required: 'Required',
                }}
                error={errors.password}
                inputProps={{
                  type: 'password',
                  placeholder: '••••••••',
                }}
              />
              <button
                type="submit"
                className="w-full px-5 py-4 bg-blue-500 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm text-center"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign in'}
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?
                <Link
                  href="/signin"
                  className="ms-2 font-medium text-primary hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupFlow;
