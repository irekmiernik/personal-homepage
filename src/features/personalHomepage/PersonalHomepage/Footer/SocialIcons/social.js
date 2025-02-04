import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as LinkendinIcon } from "./icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "./icons/instagram.svg";

export const socials = [
  {
    name: "GitHub",
    url: "http://github.com",
    Icon: styleIcon(GitHubIcon),
  },
  {
    name: "Facebook",
    url: "http://facebook.com",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "GitHub",
    url: "http://linkendin.com",
    Icon: styleIcon(LinkendinIcon),
  },
  {
    name: "GitHub",
    url: "http://instagram.com",
    Icon: styleIcon(InstagramIcon),
  },
];