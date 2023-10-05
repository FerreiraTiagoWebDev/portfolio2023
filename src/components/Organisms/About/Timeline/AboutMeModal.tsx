import { Container } from "@ui/layout";
import ComponentIsVisible from "src/components/Atoms/ComponentIsVisible";
import { ComponentModal } from "src/components/Atoms/Modal";
import { EDialogNames } from "src/lib/hooks/useDialog/enums";
import { IAboutmeTimelineItem } from "src/types/IAboutmeTimelineItem";

interface IAboutMeModalProps {
  item?: IAboutmeTimelineItem;
}

export function AboutMeModal({ item }: IAboutMeModalProps) {
  return (
    <ComponentIsVisible when={!!item}>
      <ComponentModal
        name={item?.modalName || EDialogNames.aboutPortugal}
        title={item?.modalTitle || "About me"}
      >
        <Container className="px-2 mb-2 md:px-6 md:mb-6">
          <div>{item?.modalContent}</div>
        </Container>
      </ComponentModal>
    </ComponentIsVisible>
  );
}
