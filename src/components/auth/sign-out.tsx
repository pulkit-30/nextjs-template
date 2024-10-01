'use client';

import { useTransition } from 'react';
import { signOut } from 'next-auth/react';

import Icons from '../common/icons';
import { Button } from '../ui/button';

const SignOutButton = () => {
  const [isPending, startTransition] = useTransition();
  const handelSignOut = async () => {
    startTransition(async () => await signOut());
  };
  return (
    <Button
      variant="destructive"
      onClick={handelSignOut}
      className="space-x-2"
      disabled={isPending}
    >
      <div>Sign Out</div>
      {isPending ? (
        <Icons.loader className="size-4" />
      ) : (
        <Icons.logout className="size-4" />
      )}
    </Button>
  );
};

export default SignOutButton;
