import { CssBaseline, ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import { baselightTheme } from "./theme/DefaultColors";
import { SocketProvider } from "./context/SocketContext";
import { NotificationProvider } from "./context/NotificationContext";
import SocketListeners from "./api/SocketListeners";
import { TokenProvider } from "./context/TokenContext";

function App() {
  const routing = useRoutes(Router);
  const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <SocketProvider>
          <TokenProvider>
            <SocketListeners />
            <CssBaseline />
            {routing}
          </TokenProvider>
        </SocketProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
