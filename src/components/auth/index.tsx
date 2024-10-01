import { getServerSession } from 'next-auth';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { SignInButton } from './sign-in-button';
import SignOutButton from './sign-out';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth-options';
import * as m from '@/paraglide/messages';

const Auth = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center justify-center gap-2">
      {session ? (
        <SignOutButton />
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder={m.input_email_placeholder()} />
            <Button variant="secondary" type="submit">
              {m.get_started()}
            </Button>
          </div>
          <div className="flex w-full items-center justify-between gap-1 text-xs">
            <div className="h-0.5 w-2/5 bg-gray-200 dark:bg-gray-900" />
            <div className=" text-gray-600 dark:text-gray-300">
              {m.sign_in()}
            </div>
            <div className="h-0.5 w-2/5 bg-gray-200 dark:bg-gray-900" />
          </div>
          <div className="inline-flex items-center justify-center space-x-2">
            <SignInButton provider="google" />
            <SignInButton provider="github" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
