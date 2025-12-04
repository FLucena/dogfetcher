import React from 'react';
import Image from 'next/image';
import { FetchButton } from './Client';

import './styles/Page.css';

async function Page() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    cache: 'no-store',
  });
  const { message } = await res.json();
  return (
    <div className="page-container">
      <h1>Dog Fetcher</h1> <span>by FL Automations</span>
      <div className="image-container">
        <Image
          className="dog-image"
          src={message}
          alt="Random Dog"
          width={500}
          height={500}
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <FetchButton />
    </div>
  );
}

export default Page;
