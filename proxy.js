import { NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

// الصفحات الثابتة المعروفة تحت /:lang
const staticRoutes = new Set([
  'about',
  'contact',
  'blogs',
  'types-of-operations',
]);

// المسارات الديناميكية: /:lang/blogs/:slug و /:lang/operation-details/:slug
// (وجود المقال/العملية نفسه بيتحقق منه داخل الصفحة)
const dynamicRoots = new Set(['blogs', 'operation-details']);

function isKnownPath(segments) {
  // /:lang
  if (segments.length === 0) return true;
  // /:lang/about ...
  if (segments.length === 1) return staticRoutes.has(segments[0]);
  // /:lang/blogs/:slug
  if (segments.length === 2) {
    return dynamicRoots.has(segments[0]) && segments[1].length > 0;
  }
  return false;
}

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const segments = pathname.split('/').filter(Boolean);
  const hasLocale = locales.includes(segments[0]);
  const locale = hasLocale ? segments[0] : defaultLocale;
  const rest = hasLocale ? segments.slice(1) : segments;

  // أي مسار مش معروف (كان هيرجع 404) → 301 على الهوم
  // مهم لـ SEO: بدل ما جوجل يشوف 404، يشوف تحويل دائم
  if (!isKnownPath(rest)) {
    return NextResponse.redirect(new URL(`/${locale}`, request.url), 301);
  }

  // مسار معروف لكن من غير بادئة اللغة: /blogs → /ar/blogs
  if (!hasLocale) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  return;
}

export default proxy;

export const config = {
  matcher: [
    // استثناء المسارات الداخلية والملفات العامة
    '/((?!api|_next|assets|\\.well-known|favicon.ico|robots.txt|sitemap.xml|image-sitemap.xml|llms.txt).*)',
  ],
};
