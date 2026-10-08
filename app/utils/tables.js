// Tables inside rich-text content (blogs) arrive from the editor as bare
// <table> markup: no classes, and often carrying hard-coded width/border
// attributes that push them past the phone screen. These helpers tag each
// table and wrap it in a horizontally scrollable container so wide tables
// scroll instead of breaking the layout.

const WRAP_CLASS = "content-table-wrap";
const TABLE_CLASS = "content-table";

// Attributes the editor adds that fight the responsive styling
const LEGACY_ATTRS = /\s(?:width|height|border|cellpadding|cellspacing|align|bgcolor)\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi;

// Fixed sizes inside an inline style= do the same damage
const stripSizeFromStyle = (style) =>
  style
    .replace(/(?:^|;)\s*(?:width|height|min-width)\s*:[^;]*/gi, "")
    .replace(/^;+|;+$/g, "")
    .trim();

const buildTableTag = (attrs) => {
  let cleaned = attrs.replace(LEGACY_ATTRS, "");

  // Merge our class with whatever class the editor already set
  let classes = TABLE_CLASS;
  cleaned = cleaned.replace(/\sclass\s*=\s*("([^"]*)"|'([^']*)')/i, (m, _q, dq, sq) => {
    const existing = (dq ?? sq ?? "").trim();
    if (existing) classes = `${existing} ${TABLE_CLASS}`;
    return "";
  });

  // Keep the rest of the inline style, minus the fixed dimensions
  cleaned = cleaned.replace(/\sstyle\s*=\s*("([^"]*)"|'([^']*)')/i, (m, _q, dq, sq) => {
    const style = stripSizeFromStyle(dq ?? sq ?? "");
    return style ? ` style="${style}"` : "";
  });

  return `<table class="${classes}"${cleaned.trimEnd() ? ` ${cleaned.trim()}` : ""}>`;
};

export const formatTables = (html) => {
  if (!html) return "";

  let formatted = html;

  // The backend sometimes stores the markup HTML-escaped, which renders as
  // plain text. Decode an escaped table back into a real element first.
  formatted = formatted.replace(/&lt;table[\s\S]*?&lt;\/table&gt;/gi, (match) =>
    match
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
  );

  // Already processed (content re-rendered) — don't wrap twice
  if (formatted.includes(WRAP_CLASS)) return formatted;

  // tabindex makes the scroll container reachable by keyboard
  return formatted.replace(
    /<table\b([^>]*)>([\s\S]*?)<\/table>/gi,
    (match, attrs, inner) =>
      `<div class="${WRAP_CLASS}" tabindex="0">${buildTableTag(attrs)}${inner}</table></div>`
  );
};
