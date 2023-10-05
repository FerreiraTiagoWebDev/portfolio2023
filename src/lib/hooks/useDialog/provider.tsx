"use client";

import { createContext, useCallback, useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { pages } from "src/lib/Constants/pages";

interface IDialog {
  additional?: {
    id?: number | string;
  };
  isOpened: boolean;
  name: string;
}

export interface IDialogContextProps {
  dialogs: IDialog[];
  handleClose: (name?: string, id?: number | string) => void;
  handleOpen: (name: string) => void;
}

export const DialogContext = createContext({} as IDialogContextProps);

export function DialogProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [dialogs, setDialogs] = useState<IDialog[]>([]);

  function handleOpen(name: string, id?: number | string) {
    const additionalValues = id ? { id } : undefined;

    const dialog: IDialog = {
      name,
      isOpened: true,
      additional: additionalValues,
    };

    setDialogs((state) => [...state, dialog]);
  }

  const handleClose = useCallback(
    (name?: string) => {
      if (searchParams.has("about")) {
        // router.replace(pages.about, { scroll: false });
        router.replace(pages.about);
      }
      setDialogs((state) => {
        const dialogsFiltered = state.filter((dialog) => dialog.name !== name);

        return dialogsFiltered;
      });
    },
    [router, searchParams]
  );

  const memoizedValues = useMemo(() => {
    const values = { handleClose, handleOpen, dialogs };

    return values;
  }, [dialogs, handleClose]);

  return (
    <DialogContext.Provider value={memoizedValues}>
      {children}

      <div id="modal-root" role="dialog" />
    </DialogContext.Provider>
  );
}
