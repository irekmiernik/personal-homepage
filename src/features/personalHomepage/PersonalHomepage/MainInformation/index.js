import profileImage from "./profile.jpg";
import faceIcon from "./faceIcon.png";
import laptopIcon from "./laptopIcon.png"
import { email } from "../email";
import { introduction } from "./introduction";
import { Wrapper, Avatar, ThisIs, Name, Summary, Icon, StyledButtonLink, ButtonIcon } from "./styled";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={profileImage} alt="Ireneusz Miernik" />
    <div>
      <ThisIs>Nazywam sie</ThisIs>
      <Name>Ireneusz Miernik</Name>
      <Summary>
        <Icon src={faceIcon} alt="" />
        <Icon src={laptopIcon} alt="" />
        {introduction}
      </Summary>
      <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Kontakt
      </StyledButtonLink>
    </div>
  </Wrapper>
)