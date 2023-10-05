export type IAboutmeTimelineItem = {
  id: number;
  title: string;
  subTitle: string;
  dotText: string;
  dotColor: string;
  oppositeContent: JSX.Element;
  extraStyling: string;
  modalName?: string;
  modalTitle?: string;
  modalContent?: JSX.Element;
  hoverText?: string;
};
