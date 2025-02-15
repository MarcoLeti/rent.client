import { useColorScheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

function ToggleColorMode() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      sx={{ mr: 2 }}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
      color="inherit"
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default ToggleColorMode;
