import { memo } from "react";
import { Link } from "wouter";
import { Typography } from "../../../ui/Typography";
import { Button } from "../../../ui/Button";
import ENUM_COLORS from "../../../ui/Typography/colors.enum";
import { useAuth0 } from "@auth0/auth0-react";

const WelcomeCardBase = () => {
  const { loginWithRedirect } = useAuth0();

  const onClickSignIn = () => {
    loginWithRedirect();
  };

  return (
    <div className="flex space-y-24 flex-col rounded-lg p-8 bg-night border border-gray-800 shadow-lg bg-offwhite">
      <Typography variant="h1" color={ENUM_COLORS.OFFBLACK}>
        Welcome to LearnEZ ! 🤓
      </Typography>
      <div className="flex w-full justify-center text-offblack">
        <Link href="/signIn" onClick={onClickSignIn}>
          <Button variant="primary">Sign in</Button>
        </Link>
      </div>
    </div>
  );
};

export const WelcomeCard = memo(WelcomeCardBase);
