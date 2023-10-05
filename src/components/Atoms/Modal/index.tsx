"use client";

import { useEffect, useMemo, useState } from "react";

import { createPortal } from "react-dom";
import { useHotkeys } from "react-hotkeys-hook";
import { useDialog } from "src/lib/hooks/useDialog";

import { Backdrop, Modal } from "@ui/overlay";
import { twMerge } from "tailwind-merge";
import ComponentIsVisible from "../ComponentIsVisible";

interface IComponentModalProps {
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
  name: string;
  noBackdropClick?: boolean;
  title: string;
}

export function ComponentModal({
  children,
  className,
  headerClassName,
  name,
  noBackdropClick = false,
  title,
}: IComponentModalProps) {
  const { dialogs, handleClose } = useDialog();

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const dialogFound = useMemo(() => {
    const dialog = dialogs.find(
      (dialog) => dialog.name === name && dialog.isOpened
    );

    if (dialog) {
      return dialog;
    }

    return {
      name: "",
      isOpened: false,
    };
  }, [dialogs, name]);

  useHotkeys("esc", () => handleClose(name));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted
    ? createPortal(
        <ComponentIsVisible when={dialogFound.isOpened}>
          <Modal.Root
            backdrop={
              <Backdrop
                onClick={() => !noBackdropClick && handleClose(name)}
                open={dialogFound.isOpened}
              />
            }
            className="items-center justify-center"
            open={dialogFound.isOpened}
          >
            <Modal.Container
              className={twMerge(
                "max-w-xl w-[calc(100%-64px)] max-h-[calc(100%-64px)] rounded",
                className
              )}
            >
              <Modal.Header
                className={twMerge("pl-6 mb-6", headerClassName)}
                handleClose={() => handleClose(name)}
                title={title}
              />

              <Modal.Content>{children}</Modal.Content>
            </Modal.Container>
          </Modal.Root>
        </ComponentIsVisible>,
        document.getElementById("modal-root") as HTMLElement
      )
    : null;
}
