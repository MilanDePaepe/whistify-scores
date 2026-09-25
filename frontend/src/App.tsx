import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import GamePage from "./pages/GamePage";
import RulesPage from "./pages/RulesPage";
import GamesPage from "./pages/GamesPage";
import HomePage from "./pages/HomePage";
import { getGames, getGame, getRounds } from "./api/client";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "game/:id",
        element: <GamePage />,
        loader: async ({ params }) => {
          const id = params.id!;
          const [gameData, roundsData] = await Promise.all([
            getGame(id),
            getRounds(id),
          ]);
          return { game: gameData.game, rounds: roundsData.rounds };
        },
      },
      {
        path: "games",
        element: <GamesPage />,
        loader: async () => {
          const data = await getGames();
          return data.games;
        },
      },
      { path: "regels", element: <RulesPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
