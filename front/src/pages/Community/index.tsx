import { memo } from "react";
import { Typography } from "../../ui/Typography";

const CommunityBase = () => {
  return (
    <div>
      <Typography variant="h1">Work in progress...</Typography>
    </div>
  );
};

export const Community = memo(CommunityBase);
