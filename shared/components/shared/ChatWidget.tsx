'use client';

import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://chat.key.live/bundles/widget.min.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // @ts-ignore
      window.KeyCRM?.render({
        token: "25fd200c-9537-4674-9103-afeb60b0207f",
      });
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default ChatWidget;
