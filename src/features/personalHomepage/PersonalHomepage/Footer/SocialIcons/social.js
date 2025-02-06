import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkendinIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/irekmiernik",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/irek.miernik",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/i-miernik-gazeta-pl-69083557/",
    Icon: styleIcon(LinkendinIcon),
  },
  {
    name: "Instagram",
    url: "http://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },
];