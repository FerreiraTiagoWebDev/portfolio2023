"use client";

import { useContext } from "react";

import { DialogContext, IDialogContextProps } from "./provider";

export function useDialog(): IDialogContextProps {
  const dialogContext = useContext(DialogContext);

  return dialogContext;
}
