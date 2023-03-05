import { createBrowserRouter } from "react-router-dom";
import DeActivationRequest from "../Components/DeActivationRequest";
import ActivationRequest from "../Components/ActivationRequest";
import MainLayout from "../Components/MainLayout";
const routerObj = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DeActivationRequest />,
      },
      {
        path: "/activation-request",
        element: <ActivationRequest />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObj);

export default router;
