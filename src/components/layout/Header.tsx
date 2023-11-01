import { memo } from "react";
import { Typography } from "../../ui/Typography";
import ENUM_COLORS from "../../ui/Typography/colors.enum";

const HeaderBase = () => {
  return (
    <div className="bg-red-500 bg-gradient-to-b from-red-600 p-4 flex items-center">
      <Typography variant="h1" color={ENUM_COLORS.WHITE}>
        LearnEZ
      </Typography>
    </div>
  );
};

export const Header = memo(HeaderBase);
