import { memo } from "react";
import { HomeLinks } from "./HomeLinks.tsx";
import { WelcomeCard } from "./WelcomeCard/index.tsx";
import { useAuth } from "../../hooks/useAuth.tsx";

const HomeBase = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {isAuthenticated ? <HomeLinks /> : <WelcomeCard />}
    </div>
  );
};

export const Home = memo(HomeBase);
