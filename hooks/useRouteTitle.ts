import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { manifest } from '../parts/manifest';

export const useRouteTitle = (): string => {
  const [route, setRoute] = useState('');

  const location = useLocation();
  useEffect(() => {
    const nextRoute = location.pathname.substring(1) || 'home';
    setRoute(nextRoute);
  }, [location]);

  return route;
};
