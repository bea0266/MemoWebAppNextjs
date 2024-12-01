export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <h1>메인 레이아웃 영역</h1>
            {children}
            <h1>메인 레이아웃 영역 끝</h1>
        </div>
    );
  }