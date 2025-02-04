import {
  Wrapper,
  LetsTalk,
  Address,
  EmailWrapper,
  EmailLink,
  Paragraph
} from "./styled";
import { email } from "../email";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <EmailWrapper>
        <EmailLink
          href={`mailto:${email}`}
        >
          {email}
        </EmailLink>
      </EmailWrapper>
      <Paragraph>
        I'am always open to new projects
      </Paragraph>
      <SocialIcons />
    </Address>
  </Wrapper>
)