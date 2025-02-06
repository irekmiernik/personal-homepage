import { useDispatch, useSelector } from "react-redux";
import {
  selectRepositoriesStatus, selectRepositories, fetchRepositories
} from "../../personalHomepageSlice";
import { useEffect } from "react";
import githubUsername from "./githubUsername";
import { Section, Header, StyledGitHubIcon, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import { Content } from "./Content";

export const Portfolio = () => {

  const dispatch = useDispatch();

  const repositoriesStatus = useSelector(selectRepositoriesStatus);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGitHubIcon />
        <SubHeader>Portfolio</SubHeader>
        <MyRecentProjects>
          Poniżej adresy URL do zaprojektowanych przeze mnie podczas kursu stron internetowych:
        </MyRecentProjects>
      </Header>
      <Content
        status={repositoriesStatus}
        repositories={repositories}
      />
    </Section>
  );
};