// Localized date formatting for content publish dates (created_at from the API).
// The timeZone is pinned so the server-rendered string matches the client one
// and React does not report a hydration mismatch.
const TIME_ZONE = "Asia/Riyadh";

export const formatDate = (value, language = "ar") => {
    if (!value) return "";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    try {
        return new Intl.DateTimeFormat(language === "ar" ? "ar-EG" : "en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: TIME_ZONE,
            numberingSystem: "latn",
        }).format(date);
    } catch {
        return date.toISOString().split("T")[0];
    }
};

// ISO date (YYYY-MM-DD) for <time dateTime> and schema.org datePublished
export const toISODate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toISOString();
};
