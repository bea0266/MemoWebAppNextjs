import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'ADHD, 건망증을 위한 메모 웹',
  description: "언제 어디서든 메모하고 확인할 수 있는 메모 관리 웹 사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        기본 레이아웃 영역임.
        {children}
      </body>
    </html>
  );
}
