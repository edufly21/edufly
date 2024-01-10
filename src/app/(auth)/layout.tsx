interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative bg-blob-scene bg-cover min-h-full-dvh mx-auto p-4  py-14 flex flex-col items-center md:justify-center scrollbar-none ">
      {children}
    </div>
  );
}
