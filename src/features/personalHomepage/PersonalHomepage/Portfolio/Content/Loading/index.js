import { Wrapper, StyledSpinner } from "./styled";

export const Loading = () => {
  return (
    <Wrapper>
      Poczekaj na pobranie adresów URL&nbsp;stron&nbsp;internetowych...
      <StyledSpinner />
    </Wrapper>
  )
};