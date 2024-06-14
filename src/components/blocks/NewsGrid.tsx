import { news } from '@/constants/data'
import NewsCard from '../cards/NewsCard'
import Grid from '../elements/Grid'
import SectionHeader from '../elements/SectionHeader'

export default function NewsGrid() {
  return (
    <section>
      <SectionHeader title='Noutati' link='/' />

      <Grid>
        {news.slice(0, 8).map(item => (
          <NewsCard key={item.slug} {...item} />
        ))}
      </Grid>
    </section>
  )
}
