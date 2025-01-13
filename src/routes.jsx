import { 
  Home, 
  // Profile 
} from "@/pages";

export const routes = [
  {
    name: "Inicio",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Diseña tu proyecto",
    // path: "/profile",
    // element: <Profile />,
  },
  {
    name: "Recorridos 3D",
    // path: "/profile",
    // element: <Run />,
  },
  {
    name: "Comunidad Nativo",
    // path: "/profile",
    // element: <Comunity />,
  },
  {
    name: "Asesoría personalizada",
    // path: "/profile",
    // element: <Asesory />,
  },
];

export default routes;
