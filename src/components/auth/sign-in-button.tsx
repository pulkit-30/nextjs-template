'use client';

import { useTransition } from 'react';
import { signIn } from 'next-auth/react';

import Icons from '../common/icons';

import { Button } from '@/components/ui/button';
import * as m from '@/paraglide/messages';

type Props = {
  provider: 'github' | 'google';
};
export const SignInButton = ({ provider, ...props }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleSignIn = () => {
    startTransition(async () => {
      if (provider === 'google') await signIn('google');
      else await signIn('github');
    });
  };

  return (
    <Button
      className="space-x-2"
      disabled={isPending}
      onClick={handleSignIn}
      size="sm"
      {...props}
    >
      {isPending ? (
        <Icons.loader className="size-4" />
      ) : (
        <div className="size-4">
          {provider === 'github' ? <Icons.gitHub /> : <Icons.google />}
        </div>
      )}
      <div>
        {provider === 'github' ? m.sign_in_github() : m.sign_in_google()}
      </div>
    </Button>
  );
};
