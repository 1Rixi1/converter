import { Pages } from "../pages";
import { AppThemeProvider } from "./provider/AppThemeProvider.tsx";
import { AppQueryProvider } from "./provider/QueryProvider.tsx";

function App() {
  return (
    <>
      <AppQueryProvider>
        <AppThemeProvider>
          <Pages />
        </AppThemeProvider>
      </AppQueryProvider>
    </>
  );
}

export default App;
