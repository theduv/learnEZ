import { memo } from "react";
import { Link } from "wouter";
import { Typography } from "../../../ui/Typography";
import ENUM_COLORS from "../../../ui/Typography/colors.enum";

const WelcomeCardBase = () => {
  return (
    <div className="flex space-y-24 flex-col rounded-lg p-8 bg-gray-200 border border-gray-800 shadow-lg">
      <Typography variant="h1" color={ENUM_COLORS.BLACK}>
        Welcome to LearnEZ
      </Typography>
      <div className="flex w-full justify-between">
        <Link href="/signIn" className="underline">
          Sign in
        </Link>
        <Link href="/signUp" className="underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export const WelcomeCard = memo(WelcomeCardBase);
