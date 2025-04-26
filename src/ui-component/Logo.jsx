// material-ui
import { useTheme } from '@mui/material/styles';

// project imports

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

export default function Logo() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Queue" width="100" />
     *
     */
    <svg width="92" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Queue icon - people in line - enlarged and centered */}
      <path
        d="M16 32C7.163 32 0 24.837 0 16C0 7.163 7.163 0 16 0C24.837 0 32 7.163 32 16C32 24.837 24.837 32 16 32ZM16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
        fill={theme.palette.primary.main}
      />
      
      {/* Person 1 in queue */}
      <circle cx="8" cy="12" r="3.5" fill={theme.palette.secondary.main} />
      <path
        d="M8 16C5.791 16 4 17.791 4 20V26H12V20C12 17.791 10.209 16 8 16Z"
        fill={theme.palette.secondary.main}
      />
      
      {/* Person 2 in queue */}
      <circle cx="16" cy="12" r="3.5" fill={theme.palette.primary.main} />
      <path
        d="M16 16C13.791 16 12 17.791 12 20V26H20V20C20 17.791 18.209 16 16 16Z"
        fill={theme.palette.primary.main}
      />
      
      {/* Person 3 in queue */}
      <circle cx="24" cy="12" r="3.5" fill={theme.palette.secondary.main} />
      <path
        d="M24 16C21.791 16 20 17.791 20 20V26H28V20C28 17.791 26.209 16 24 16Z"
        fill={theme.palette.secondary.main}
      />
      
      {/* Queue line */}
      <path
        d="M3 28H29"
        stroke={theme.palette.primary.main}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 1.5"
      />
    </svg>
  );
}
