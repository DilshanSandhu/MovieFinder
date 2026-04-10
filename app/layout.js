export const metadata = {
  title: "MovieFinder",
  description: "Search for movies easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}