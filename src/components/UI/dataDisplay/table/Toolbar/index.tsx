import { HTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

import { Heading } from "@ui/Heading";
import { LinearLoader } from "@ui/loader";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { Box, Flex, Grid } from "../../../layout";

interface ITableToolbarProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  subheader?: React.ReactNode;
  title?: string;
  toolbarActions?: React.ReactNode;
}

export function TableToolbar({
  className,
  isLoading = false,
  subheader,
  title,
  toolbarActions,
  ...rest
}: ITableToolbarProps) {
  return (
    <div className={twMerge("", className)} {...rest}>
      <Grid className="items-center mb-8 lg:grid-cols-2">
        <Grid className="lg:grid-cols-2">
          <ComponentIsVisible when={!!title}>
            <Box>
              <Heading className="text-gray-700 font-bold md:mr-6" variant="h6">
                {title}
              </Heading>
            </Box>
          </ComponentIsVisible>
          <ComponentIsVisible when={!!subheader}>
            <Box>{subheader}</Box>
          </ComponentIsVisible>
        </Grid>
        <Grid className="justify-end">
          <ComponentIsVisible when={!!toolbarActions}>
            {toolbarActions}
          </ComponentIsVisible>
        </Grid>
      </Grid>
      <Flex>
        <ComponentIsVisible when={isLoading}>
          <LinearLoader />
        </ComponentIsVisible>
      </Flex>
    </div>
  );
}
