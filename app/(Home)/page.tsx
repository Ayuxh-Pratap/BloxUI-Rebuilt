import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-[92vh]  flex-col justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">BloxUI Documentation</h1>
      <p className='text-muted-foreground'>This is the BloxUI documentation template made by Ayush Pratap Singh</p>
      <p className="text-muted-foreground">
        You can open{' '}
        <Link href="/docs/folder-1/overview" className="text-foreground font-semibold underline">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
