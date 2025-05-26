import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

function ColorSchemeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();


  return (
      <ActionIcon variant="subtle" color={colorScheme == "light" ? "black" : "white"} size="xl" radius="md" aria-label="Settings" onClick={toggleColorScheme}>
        {colorScheme == "light"
          ? <IconMoon style={{ width: '70%', height: '70%' }} stroke={1.5} />
          : <IconSun style={{ width: '70%', height: '70%' }} stroke={1.5} />}
      </ActionIcon>
  )
}

export default ColorSchemeButton;