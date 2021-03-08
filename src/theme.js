import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

import {blue,red} from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red
  },
});

export default theme;