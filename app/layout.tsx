import { Providers } from './providers'

export const metadata = {
  title: 'Advent Calendar',
  description: 'Advent Calendar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
