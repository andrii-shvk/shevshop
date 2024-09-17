import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ua from "./ua.json";

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            ua: {
                translation: ua,
            },
        },
        lng: "en", // Default language
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React already escapes values
        },
    });

export default i18n;
