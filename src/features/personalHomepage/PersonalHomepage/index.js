import { MainInformation } from "./MainInformation";
import { ThemeSwitch } from "../../../common/ThemeSwitch";
import { Container, Icon } from "./styled";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import ToolsIcon from "./toolsIcon.png";
import RocketIcon from "./rocketIcon.png";
import { skills, nextSkills } from "./skillsData";
import { Footer } from "./Footer";


export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <MainInformation />
    <main>
      <Skills
        title={(
          <>
            Podczas kursu poznamlem <Icon src={ToolsIcon} alt="" />
          </>
        )}
        skills={skills}
      />
      <Skills
        title={(
          <>
            Chciaym jeszcze poznac <Icon src={RocketIcon} alt="" />
          </>
        )}
        skills={nextSkills}
      />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);