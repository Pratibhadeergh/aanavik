import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="relative max-w-4xl mx-auto px-6 py-20">
      {children}
    </main>
  );
}
