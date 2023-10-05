import { Flex } from "@ui/layout";
import Image from "next/image";
import { GiBelgium, GiPortugal } from "react-icons/gi";
import Belgium from "src/components/Organisms/About/Timeline/AboutMeModalContentItems/Belgium";
import Fixxer from "src/components/Organisms/About/Timeline/AboutMeModalContentItems/Fixxer";
import Intec from "src/components/Organisms/About/Timeline/AboutMeModalContentItems/Intec";
import Jaimy from "src/components/Organisms/About/Timeline/AboutMeModalContentItems/Jaimy";
import Portugal from "src/components/Organisms/About/Timeline/AboutMeModalContentItems/Portugal";
import { IAboutmeTimelineItem } from "src/types/IAboutmeTimelineItem";
import { EDialogNames } from "../hooks/useDialog/enums";

export const ABOUT_ME_TIMELINE_ITEMS: IAboutmeTimelineItem[] = [
  {
    id: 1,
    title: "Born",
    subTitle: "In Portugal",
    dotText: `/91/`,
    dotColor: "black",
    oppositeContent: <GiPortugal size={34} />,
    extraStyling:
      "linear-gradient(90deg, #009e49 0%, #009e49 45%, #ffcc29 45%, #ffcc29 55%, #ff0000 55%, #ff0000 100%)",
    hoverText: "Read more about my country!",
    modalName: EDialogNames.aboutPortugal,
    modalTitle: "Read more about Portugal!",
    modalContent: <Portugal />,
  },
  {
    id: 2,
    title: "Diploma",
    subTitle: "Speech Therapy",
    dotText: `/14/`,
    dotColor: "black",
    oppositeContent: (
      <Flex className="w-full h-full items-center justify-start">
        <Image src="/assets/images/ipl.png" width={200} height={75} alt="ipl" />
      </Flex>
    ),
    extraStyling:
      "linear-gradient(90deg, #009e49 0%, #009e49 45%, #ffcc29 45%, #ffcc29 55%, #ff0000 55%, #ff0000 100%)",
  },
  {
    id: 3,
    title: "Relocates",
    subTitle: "Brussels",
    dotText: `/15/`,
    dotColor: "white",
    oppositeContent: <GiBelgium size={34} />,
    extraStyling:
      "linear-gradient(90deg, #000000 0%, #000000 33.33%, #ff0000 33.33%, #ff0000 66.66%, #ffe600 66.66%, #ffe600 100%)",
    modalName: EDialogNames.aboutBrussels,
    hoverText: "Read more about Brussels!",
    modalTitle: "Read more about Brussels!",
    modalContent: <Belgium />,
  },
  {
    id: 4,
    title: "Job - Hotel Queen Anne & Crowne Plaza",
    subTitle: "Receptionist",
    dotText: `/17/`,
    dotColor: "white",
    oppositeContent: (
      <Flex className="w-full h-full items-center justify-start">
        <Image
          src="/assets/images/crownePlaza.png"
          width={175}
          height={75}
          alt="crownePlaza"
        />
      </Flex>
    ),
    extraStyling:
      "linear-gradient(90deg, #000000 0%, #000000 33.33%, #ff0000 33.33%, #ff0000 66.66%, #ffe600 66.66%, #ffe600 100%)",
  },
  {
    id: 5,
    title: "Certificate",
    subTitle: "Front-End Development",
    dotText: `/21/`,
    dotColor: "white",
    oppositeContent: (
      <Flex className="w-full h-full items-center justify-end">
        <Image
          src="/assets/images/intec.png"
          width={200}
          height={75}
          alt="intec"
        />
      </Flex>
    ),
    extraStyling:
      "linear-gradient(90deg, #000000 0%, #000000 33.33%, #ff0000 33.33%, #ff0000 66.66%, #ffe600 66.66%, #ffe600 100%)",
    modalName: EDialogNames.aboutCertification,
    hoverText: "Check out my certificate!",
    modalTitle: "Intec Brussel",
    modalContent: <Intec />,
  },
  {
    id: 6,
    title: "Job - Jaimy by Belfius",
    subTitle: "Junior Front-End Developer",
    dotText: `/22/`,
    dotColor: "white",
    oppositeContent: (
      <Flex className="w-full h-full items-center justify-start">
        <Image
          src="/assets/images/jaimy.png"
          width={225}
          height={100}
          alt="jaimy"
        />
      </Flex>
    ),
    extraStyling:
      "linear-gradient(90deg, #000000 0%, #000000 33.33%, #ff0000 33.33%, #ff0000 66.66%, #ffe600 66.66%, #ffe600 100%)",
    modalName: EDialogNames.aboutJaimy,
    hoverText: "Check out my work at Jaimy!",
    modalTitle: "Jaimy by Belfius",
    modalContent: <Jaimy />,
  },
  {
    id: 7,
    title: "Job - Fixxer",
    subTitle: "Lead Front-End Developer",
    dotText: `/23/`,
    dotColor: "white",
    oppositeContent: (
      <Flex className="w-full h-full items-center justify-end">
        <Image
          src="/assets/images/fixxer.png"
          width={200}
          height={75}
          alt="fixxer"
        />
      </Flex>
    ),
    extraStyling:
      "linear-gradient(90deg, #000000 0%, #000000 33.33%, #ff0000 33.33%, #ff0000 66.66%, #ffe600 66.66%, #ffe600 100%)",
    modalName: EDialogNames.aboutFixxer,
    hoverText: "Check out my work at Jaimy!",
    modalTitle: "Fixxer",
    modalContent: <Fixxer />,
  },
];
