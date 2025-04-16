// src/components/GoogleSignIn.jsx
import { useEffect } from 'react';

export default function GoogleSignIn({ onSuccess }) {
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: "YOUR_CLIENT_ID.apps.googleusercontent.com",
          callback: onSuccess
        });
        
        window.google.accounts.id.renderButton(
          document.getElementById("googleSignInContainer"),
          { theme: "outline", size: "large" }
        );
      }
    };

    // Check if Google script is loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleSignIn;
      document.body.appendChild(script);
    } else {
      initializeGoogleSignIn();
    }

    return () => {
      // Cleanup if needed
    };
  }, [onSuccess]);

  return <div id="googleSignInContainer"></div>;
}