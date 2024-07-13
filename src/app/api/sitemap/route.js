import {
  shop,
  strollers,
  furniture,
  accessories,
  transport,
  textile,
  toys,
  backpacks,
} from "@/shared/list";

import { slugify } from "transliteration";
const moment = require("moment");

export async function GET() {
  try {
    var { data } = await (
      await fetch(
        "https://www.admin-enfys.space/api/tests?populate=*&pagination[pageSize]=100",
        { cache: "no-cache" }
      )
    ).json();

    if (!data) {
      console.error("Invalid or non-iterable data:", data);
      return new Response("Failed to generate sitemap", { status: 500 });
    }

    const BASE_URL = "https://www.enfys.com.ua";
    const filterNewArrivals = data.filter(
      (product) => product?.attributes?.newArrivals === true
    );
    const filterBestSellers = data.filter(
      (product) => product?.attributes?.bestSellers === true
    );

    // Функция для генерации страниц из предоставленного списка
    const generatePages = (category) => {
      return category.flatMap(({ link, list }) => [
        {
          url: `${BASE_URL}${link}`,
          lastModified: "2024-07-13",
          changeFrequency: "weekly",
          priority: "1.0",
        },
        ...(list
          ? list.map((item) => ({
              url: `${BASE_URL}${link}${item.link}`,
              lastModified: "2024-07-13",
              changeFrequency: "weekly",
              priority: "0.8",
            }))
          : []),
      ]);
    };

    // Статические страницы
    const staticPages = [
      ...generatePages(shop),
      ...generatePages(strollers),
      ...generatePages(furniture),
      ...generatePages(accessories),
      ...generatePages(transport),
      ...generatePages(textile),
      ...generatePages(toys),
      ...generatePages(backpacks),
      {
        url: `${BASE_URL}/novi-nadhodzhennya`,
        lastModified: "2024-07-13",
        changeFrequency: "weekly",
        priority: "0.8",
      },
      {
        url: `${BASE_URL}/hiti-prodazhiv`,
        lastModified: "2024-07-13",
        changeFrequency: "weekly",
        priority: "0.8",
      },
    ];

    // Динамические страницы
    const topSales = (data) => {
      return data.map((item) => {
        const link = slugify(item.attributes.title);
        const isoDate = item.attributes.updatedAt;

        return {
          url: `${BASE_URL}/hiti-prodazhiv/${link}`,
          lastModified: moment(isoDate).format("YYYY-MM-DD"),
          changeFrequency: "weekly",
          priority: "0.8",
        };
      });
    };

    const bestSales = (data) => {
      return data.map((item) => {
        const link = slugify(item.attributes.title);
        const isoDate = item.attributes.updatedAt;

        return {
          url: `${BASE_URL}/novi-nadhodzhennya/${link}`,
          lastModified: moment(isoDate).format("YYYY-MM-DD"),
          changeFrequency: "weekly",
          priority: "0.8",
        };
      });
    };

    const dynamicPages = data.map((item) => {
      const category = slugify(item.attributes.category);
      const link = slugify(item.attributes.title);
      const isoDate = item.attributes.updatedAt;

      return {
        url: `${BASE_URL}/${category}/${link}`,
        lastModified: moment(isoDate).format("YYYY-MM-DD"),
        changeFrequency: "weekly",
        priority: "1.0",
      };
    });

    // Объединяем все страницы
    const allPages = [
      ...staticPages,
      ...topSales(filterNewArrivals),
      ...bestSales(filterBestSellers),
      ...dynamicPages,
    ];

    // Генерируем XML
    const sitemapXml = generateSitemapXml(allPages);

    return new Response(sitemapXml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error("Error during sitemap generation:", error);
    return new Response("Failed to generate sitemap", { status: 500 });
  }
}

function generateSitemapXml(data) {
  const xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${data
        .map(
          (item) => `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastModified}</lastmod>
          <changefreq>${item.changeFrequency}</changefreq>
          <priority>${item.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  return xml.trim();
}
