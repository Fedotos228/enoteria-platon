"use client";

import useGetNews from "@/hooks/queries/useGetNews"
import useScreenSize from "@/hooks/useScreenSize"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import NewsCard from "../cards/NewsCard"
import Grid from "../elements/Grid"
import Loader from "../elements/Loader"
import PaginationComponent from "../elements/PaginationComponent"
import SectionHeader from "../elements/SectionHeader"

interface INewsGrid {
  gridSize: number;
  newsNumber: number;
}

export default function NewsGrid({
  sectionTitle,
  sectionLink,
  className,
}: {
  sectionTitle?: string;
  sectionLink?: string;
  className?: string;
}) {
  const [newsGrid, setNewsGrid] = useState<INewsGrid>({
    gridSize: 4,
    newsNumber: 4,
  });
  const pathname = usePathname();
  const newsPage = pathname.includes("/news");
  const { data, isLoading } = useGetNews();
  const { data: news, meta } = data || {};
  const { width } = useScreenSize();
  const { pagination } = meta || {};

  useEffect(() => {
    if (width > 992) {
      setNewsGrid({
        gridSize: 4,
        newsNumber: 4,
      });
    }

    if (width < 992) {
      setNewsGrid({
        gridSize: 3,
        newsNumber: 3,
      });
    }

    if (width < 768) {
      setNewsGrid({
        gridSize: 2,
        newsNumber: 4,
      });
    }

    if (width < 480) {
      setNewsGrid({
        gridSize: 1,
        newsNumber: 4,
      });
    }
  }, [width]);

  if (isLoading) return <Loader loading={isLoading} />;

  let slicedNewsGrid = news?.slice(0, newsGrid.newsNumber);

  if (pathname.includes("/news")) {
    slicedNewsGrid = news;
  }

  if (!news) return null;

  return (
    <section className={className}>
      <SectionHeader title={sectionTitle} link={sectionLink} />

      <Grid gridSize={newsGrid.gridSize}>
        {slicedNewsGrid && slicedNewsGrid.map((item: any) => (
          <NewsCard key={item?.attributes?.slug} post={item?.attributes} />
        ))}
      </Grid>

      {newsPage && Array.isArray(news) && news.length > 8 && <PaginationComponent />}
    </section>
  );
}
