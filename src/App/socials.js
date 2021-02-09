import { ReactComponent as GithubIcon } from "./githubBlack.svg";
import { ReactComponent as FacebookIcon } from "./facebookBlack.svg";
import { ReactComponent as LinkedinIcon } from "./linkedinBlack.svg";
import { styleIcon } from "./styled";

export const email = "wojciechknott@gmail.com";

export const socials = [
  {
    id: "github",
    Icon: styleIcon(GithubIcon),
    url: "https://github.com/wknott",
  },
  {
    id: "facebook",
    Icon: styleIcon(FacebookIcon),
    url: "https://www.facebook.com/wojciech.knott",
  },
  {
    id: "linkedin",
    Icon: styleIcon(LinkedinIcon),
    url: "https://www.linkedin.com/in/wojciechknott/",
  },
];