import { ButtonLink } from "../../../ButtonLink";
import githubUsername from "../../githubUsername";
import { Wrapper, Header, Paragraph } from "./styled";
import { ReactComponent as WarningIcon } from "./warning.svg";

export const ErrorBox = () => (
  <Wrapper>
    <WarningIcon />
    <Header>Ooops! Something went wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github projects.<br />
      You can check them directly on Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to Github
    </ButtonLink>
  </Wrapper>
);
