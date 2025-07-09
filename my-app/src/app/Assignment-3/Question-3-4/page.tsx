'use client';
import { useRouter } from 'next/navigation';

export default function Assignment3Home() {
  const router = useRouter();

  return (
    <main style={{ padding: 30 }}>
     

      {/* <button onClick={() => router.push('/Assignment-3/Home')} style={{ margin: '10px' }}>
        Home Page (Q3 & Q4)
      </button> */}

      {/* <button onClick={() => router.push('/Assignment-3/About')} style={{ margin: '10px' }}>
        About (Protected Page)
      </button> */}

      <button onClick={() => router.push('/Assignment-3/Login')} style={{ margin: '10px' }}>
        Login Page
      </button>

       {/* <button onClick={() => router.push('/Assignment-3/Dashboard')} style={{ margin: '10px' }}>
        Login Page
      </button> */}
    </main>
  );
}
