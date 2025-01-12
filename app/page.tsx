import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TechieCerts.com - AI-900 Exam Updates',
  description: 'Updates for Tom Taulli\'s book about the Microsoft AI-900 exam',
}

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Welcome to TechieCerts.com
        </h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-center text-muted-foreground">
            Your source for updates to Tom Taulli&apos;s book about the Microsoft AI-900 exam
          </p>
        </div>
      </div>
    </main>
  )
}

