import { PagesPoint } from "../pages";
import { AppThemeProvider } from "./provider/AppThemeProvider.tsx";
import { AppQueryProvider } from "./provider/QueryProvider.tsx";

function App() {
  return (
    <>
      <AppQueryProvider>
        <AppThemeProvider>
          <PagesPoint />
        </AppThemeProvider>
      </AppQueryProvider>
    </>
  );
}

export default App;
