// Shared helpers that turn video links inside rich-text content (blogs, operations)
// into responsive embeds. Supports YouTube (incl. Shorts) and TikTok.

// Videos must never start on their own — the visitor presses play and the video
// plays with sound. `autoplay` is deliberately left OUT of the allow list so the
// browser blocks any autoplay attempt by the player, and `mute=0` keeps the
// audio on once the user does press play (a muted autoplay would otherwise be
// the only thing browsers permit).
export const YOUTUBE_ALLOW = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
export const TIKTOK_ALLOW = "clipboard-write; encrypted-media; picture-in-picture; fullscreen";

export const youtubeEmbedSrc = (videoId) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&playsinline=1&rel=0`;

export const tiktokEmbedSrc = (videoId) =>
    `https://www.tiktok.com/embed/v2/${videoId}?autoplay=0&music_info=1&description=1`;

// Extract a YouTube video ID from a full URL or a raw ID
export const getYoutubeId = (value) => {
    if (!value) return "";
    const patterns = [
        /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
        /^([A-Za-z0-9_-]{11})$/,
    ];
    for (const re of patterns) {
        const match = value.match(re);
        if (match) return match[1];
    }
    return "";
};

// Extract a TikTok video ID from a full URL or a raw numeric ID.
// Short links (vm.tiktok.com/xxx, tiktok.com/t/xxx) don't carry the ID and
// can't be resolved client-side, so they're left as plain links.
export const getTiktokId = (value) => {
    if (!value) return "";
    const patterns = [
        /tiktok\.com\/(?:@[^/]+\/)?(?:video|photo)\/(\d{6,})/,
        /tiktok\.com\/embed\/(?:v2\/)?(\d{6,})/,
        /^(\d{6,})$/,
    ];
    for (const re of patterns) {
        const match = value.match(re);
        if (match) return match[1];
    }
    return "";
};

// Build a YouTube embed from a video ID. Shorts get a portrait (9:16) wrapper;
// normal videos return a bare iframe that the generic wrapper handles as 16:9.
export const buildYoutubeEmbed = (videoId, isShort = false) => {
    if (!videoId) return "";
    const iframe = `<iframe src="${youtubeEmbedSrc(videoId)}" title="YouTube video player" frameborder="0" allow="${YOUTUBE_ALLOW}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    return isShort ? `<div class="video-responsive video-short">${iframe}</div>` : iframe;
};

// Build a TikTok embed from a video ID, always portrait.
export const buildTiktokEmbed = (videoId) => {
    if (!videoId) return "";
    return `<div class="video-responsive video-tiktok"><iframe src="${tiktokEmbedSrc(videoId)}" title="TikTok video player" frameborder="0" allow="${TIKTOK_ALLOW}" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
};

const YOUTUBE_URL = "(?:youtube\\.com\\/watch\\?v=|youtu\\.be\\/|youtube\\.com\\/embed\\/|youtube\\.com\\/shorts\\/)[A-Za-z0-9_-]{11}";
const TIKTOK_URL = "tiktok\\.com\\/(?:@[^\\s\"'<>/]+\\/(?:video|photo)\\/\\d{6,}|embed\\/(?:v2\\/)?\\d{6,})";

// Turn any YouTube/TikTok link (escaped iframe, <a> wrapped, or bare text) inside an
// HTML string into a responsive embed.
export const embedMedia = (html) => {
    if (!html) return "";
    let formatted = html;

    // The backend may store the iframe HTML-escaped (&lt;iframe ...&gt;), which shows
    // up as plain text. Decode any escaped iframe back to a real element first.
    formatted = formatted.replace(/&lt;iframe[\s\S]*?&lt;\/iframe&gt;/gi, (match) =>
        match
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&')
    );

    // Convert a video link wrapped in an <a> tag into a responsive embed
    formatted = formatted.replace(
        new RegExp(`<a\\b[^>]*href=["'](https?:\\/\\/(?:www\\.)?(?:${YOUTUBE_URL}|${TIKTOK_URL})[^"']*)["'][^>]*>[\\s\\S]*?<\\/a>`, 'gi'),
        (match, url) => buildEmbedFromUrl(url) || match
    );

    // Convert a bare video link (plain text) into a responsive embed
    formatted = formatted.replace(
        new RegExp(`(^|[\\s>(])((?:https?:\\/\\/)?(?:www\\.)?(?:${YOUTUBE_URL}|${TIKTOK_URL})[^\\s<)]*)`, 'gi'),
        (match, pre, url) => {
            const embed = buildEmbedFromUrl(url);
            return embed ? pre + embed : match;
        }
    );

    // Wrap any remaining <iframe> (e.g. embeds coming from the backend) in a responsive
    // container — skip ones already wrapped to avoid double wrapping.
    formatted = formatted.replace(/(?<!<div class="video-responsive[^"]*">)(<iframe[\s\S]*?<\/iframe>)/gi, (match) => {
        const iframe = disableAutoplay(match);
        if (/tiktok\.com/i.test(iframe)) return `<div class="video-responsive video-tiktok">${iframe}</div>`;
        return `<div class="video-responsive">${iframe}</div>`;
    });

    return formatted;
};

// An iframe pasted by an editor often carries autoplay=1 / mute=1. Strip that so
// every embed waits for a press and then plays with sound.
export const disableAutoplay = (iframeHtml) => {
    if (!iframeHtml) return "";
    return iframeHtml
        .replace(/([?&])autoplay=1/gi, '$1autoplay=0')
        .replace(/([?&])mute=1/gi, '$1mute=0')
        .replace(/(allow=["'][^"']*)\bautoplay\s*;?\s*/gi, '$1');
};

// Pick the right embed for a single URL (YouTube or TikTok)
export const buildEmbedFromUrl = (url) => {
    if (!url) return "";
    if (/tiktok\.com/i.test(url)) return buildTiktokEmbed(getTiktokId(url));
    return buildYoutubeEmbed(getYoutubeId(url), /\/shorts\//i.test(url));
};
