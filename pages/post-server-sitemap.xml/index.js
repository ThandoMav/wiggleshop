import Axios from 'axios';
import { getServerSideSitemap } from 'next-sitemap';

//import { getServerSideProps, getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(context) {
  const response = await Axios.get(
    `https://www.22febmmwa.vercel.app/search-posts`
  );

  const posts = await response.json();

  const fields = posts?.map((item) => ({
    loc: `https://www.22febmmwa.vercel.app/post/${item.url}`,
    lastmodi: new Date().toISOString(),
  }));
  return getServerSideSitemap(context, fields);
}

export default function Site() {}
