/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Script from "next/script";

export const Script1 = () => {
  return (
    <>
      {/* <!-- Meta Pixel Code --> 1 */}
      <Script id="show-Pixel 1">
        {`
             !function(f,b,e,v,n,t,s)
             {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
             n.callMethod.apply(n,arguments):n.queue.push(arguments)};
             if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
             n.queue=[];t=b.createElement(e);t.async=!0;
             t.src=v;s=b.getElementsByTagName(e)[0];
             s.parentNode.insertBefore(t,s)}(window, document,'script',
             'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '390090360428292');
             fbq('track', 'PageView');
          `}
      </Script>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="hhttps://www.facebook.com/tr?id=390090360428292&ev=PageView&noscript=1"
      />
    </>
  );
};

export const Script2 = () => {
  return (
    <>
      {/* <!-- Meta Pixel Code --> 1 */}
      <Script id="show-Pixel 1">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1130145815436582');
fbq('track', 'PageView');
          `}
      </Script>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=1130145815436582&ev=PageView&noscript=1"
      />
    </>
  );
};
