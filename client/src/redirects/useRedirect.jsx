import { useEffect, useState } from 'react';
import redirectMap from './redirectMap';

/**
 * Hook to redirect based on the current subdomain and show a message while redirecting.
 * If redirection doesn't happen automatically, offer a "click here" option.
 */
const useRedirect = () => {
  const [redirectUrl, setRedirectUrl] = useState(null);

  useEffect(() => {
    const { hostname } = window.location;
    const parts = hostname.split('.');

    if (parts.length > 2) {
      const subdomain = parts[0];
      const matchedRedirectUrl = redirectMap[subdomain];
      if (matchedRedirectUrl) {
        setRedirectUrl(matchedRedirectUrl);
        window.location.href = matchedRedirectUrl;
      }
    }
  }, [redirectMap]);

  return redirectUrl ? (
    <div className="redirect-message">
      Redirecting you to
      {' '}
      {redirectUrl}
      ...
      If it doesn&apos;t work,
      {' '}
      <a href={redirectUrl}>click here</a>
      .
    </div>
  ) : null;
};

export default useRedirect;
