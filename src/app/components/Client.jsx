'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import './styles/Button.css';

export function FetchButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="button"
      disabled={isPending}
      onClick={() => startTransition(router.refresh)}
    >
      {isPending && 'Loading...'}
      {!isPending && 'Click to fetch a random dog!'}
    </button>
  );
}

export default FetchButton;
