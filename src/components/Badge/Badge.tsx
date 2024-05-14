import { Badge as MantineBadge } from '@mantine/core';
import { useMemo } from 'react';

import { defaultBadgePalette } from "@/shared/lib/constants";
import classes from "./classes.module.css";

type Props = {
  name: string;
  color: string;
  palette?: { [P in string]: string }
};
export default function Badge({ name, color, palette = defaultBadgePalette }: Props) {
    const isPalette = useMemo(() => (
      candidate: string
    ): candidate is keyof typeof palette => {
      return candidate in palette ? true : false;
    }, [palette]);

  const type = isPalette(color) ? palette[color] : 'completed';

  return (
    <MantineBadge
      bg={type}
      className={classes.badge}
    >
      {name}
    </MantineBadge>
  );
};