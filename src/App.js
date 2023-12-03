import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import styles from "./styles/global.module.scss";
import Questions from "./pages/questions/Questions";
import Login from "./pages/login/Login";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <div className={styles.menuContainer}>
            <Menu />
          </div>
          <div className={styles.contentContainer}>
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Questions />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
