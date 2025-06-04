'use client';
import Image from 'next/image';
import { SimpleBarGraph } from '@undp/data-viz';
import { H3 } from '@undp/design-system-react';

import '@undp/design-system-react/style.css';
import '@undp/data-viz/style.css';

export default function Home() {
  return (
    <div className='m-5'>
      <div>
        <Image
          src='/undp-logo-blue.svg'
          className='logo react mb-8'
          alt='UNDP logo'
          width={72}
          height={38}
          priority
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <H3 className='text-center' marginBottom='xl'>
        This is template for building visualization and frontend project
        maintained by UNDP&apos;s SDG Integration Team.
        <br />
        <br />
        Contact us at data@undp.org if you have any feedback or questions.
      </H3>
      <div style={{ maxWidth: '720px' }} className='m-auto w-full'>
        <SimpleBarGraph
          data={[
            {
              label: '2020 Q1',
              size: 3,
            },
            {
              label: '2020 Q2',
              size: 8,
            },
            {
              label: '2020 Q3',
              size: 11,
            },
            {
              label: '2020 Q4',
              size: 19,
            },
            {
              label: '2021 Q1',
              size: 3,
            },
            {
              label: '2022 Q2',
              size: 8,
            },
            {
              label: '2023 Q3',
              size: 11,
            },
            {
              label: '2024 Q4',
              size: 19,
            },
          ]}
        />
      </div>
    </div>
  );
}
