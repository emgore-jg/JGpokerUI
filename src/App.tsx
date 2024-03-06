import AppHeader from "./screens/AppHeader";

interface AppLayout {
  children: React.ReactNode;
}
function App( {children}: AppLayout) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader />
      {children}
    </div>
  );
}

export default App;
