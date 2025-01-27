import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Wrraper, Button, Text, Box, IconWrraper, Icon } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  return (
    <Wrraper>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text>Dark mode {isDarkTheme ? "on" : "of"}</Text>
        <Box>
          <IconWrraper $right={isDarkTheme} >
            <Icon />
          </IconWrraper>
        </Box>
      </Button>
    </Wrraper>
  );
};