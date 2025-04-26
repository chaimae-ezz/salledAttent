import { useNavigate } from 'react-router-dom';
import NavigationScroll from 'layout/NavigationScroll';
import ThemeCustomization from 'themes';

// Importer AppRoutes
import AppRoutes from 'routes';

export default function App() {
  // const navigate = useNavigate();
  //
  // React.useEffect(() => {
  //   navigate('pages/login');
  // }, []);
  return (
    <ThemeCustomization>
      <NavigationScroll>
        <AppRoutes />
      </NavigationScroll>
    </ThemeCustomization>
  );
}

