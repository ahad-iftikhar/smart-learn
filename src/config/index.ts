import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        default: "SmartLearn - AI Powered learning platform",
        template: `%s | SmartLearn`
    },
   
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    
   
    metadataBase: new URL("https://astra-app.vercel.app"),
};
