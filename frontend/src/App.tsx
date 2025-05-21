import { useCallback, useState } from 'react';

import '@mantine/core/styles.css';
import { MantineProvider, type MantineColorScheme } from '@mantine/core';

function App() {
  const [colorScheme, setColorScheme] = useState<MantineColorScheme>("light")
  const toggleDarkTheme = useCallback()


  return (
    <MantineProvider defaultColorScheme={colorScheme}>

    </MantineProvider>
  )
}

export default App
