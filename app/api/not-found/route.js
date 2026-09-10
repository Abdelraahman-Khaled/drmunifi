import { NextResponse } from "next/server";

/**
 * نقطة النهاية اللي بيوصل لها أي مسار مش موجود.
 *
 * `rewrites.fallback` في next.config.mjs بيوجّه هنا أي طلب فشل يلاقي
 * ملف ثابت أو راوت (صفحة، صورة، أي حاجة)، وده آخر خطوة قبل الـ 404.
 * بنرجّع 301 على الهوم بدل 404 عشان الـ SEO.
 */
const locales = ["ar", "en"];
const defaultLocale = "ar";

export const dynamic = "force-dynamic";

function redirectTarget(request) {
  // المسار الأصلي بيتبعت في الكويري لأن الطلب اتعمله rewrite لهنا
  const original = request.nextUrl.searchParams.get("path") || "";
  const first = original.split("/").filter(Boolean)[0];
  const locale = locales.includes(first) ? first : defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}`, request.url), 301);
}

export function GET(request) {
  return redirectTarget(request);
}

export function HEAD(request) {
  return redirectTarget(request);
}

export function POST(request) {
  return redirectTarget(request);
}
