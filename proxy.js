import { NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Check if the pathname has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Example: /blogs -> /ar/blogs
  return NextResponse.redirect(request.nextUrl, { status: 301 });
}

export default proxy;

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    '/((?!api|_next/static|_next/image|assets|favicon.ico|robots.txt|sitemap.xml|image-sitemap.xml|llms.txt).*)',
  ],
};
