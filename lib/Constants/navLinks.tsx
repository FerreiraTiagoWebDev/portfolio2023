import ContactMailIcon from "@mui/icons-material/ContactMail";
import FaceIcon from "@mui/icons-material/Face";
import WebhookIcon from "@mui/icons-material/Webhook";
import WorkIcon from "@mui/icons-material/Work";
export const navLinks = [
  {
    id: 1,
    icon: <FaceIcon fontSize="small" />,
    text: "About",
    href: "/about",
  },
  {
    id: 2,
    icon: <WorkIcon fontSize="small" />,
    text: "Work",
    href: "/work",
  },
  {
    id: 3,
    icon: <WebhookIcon fontSize="small" />,
    text: "Tech",
    href: "/tech",
  },
  {
    id: 4,
    icon: <ContactMailIcon fontSize="small" />,
    text: "Contact",
    href: "/Contact",
  },
];
