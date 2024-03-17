import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-Z2LPPK69XW"; // Remplacez par votre propre ID de suivi

function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);
}

export default useAnalytics;
