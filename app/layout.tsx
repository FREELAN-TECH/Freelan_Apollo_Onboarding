import "./styles.css";
import "./visual-polish.css";
import "./operations.css";

export const metadata = { title: "Apollo Onboarding · Freelan", description: "Portal interno de implementación Apollo" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

