interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen max-w-5xl  mx-auto px-2  py-14 flex flex-col items-center md:justify-center scrollbar-none ">
      {children}
    </div>
  );
}
