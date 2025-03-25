import Axios from 'axios';
import { getServerSideSitemap } from 'next-sitemap';

//import { getServerSideProps, getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(context) {
  const response = await Axios.get(
    `https://www.julyclient.vercel.app/search-services`
  );

  const posts = await response.json();

  const fields = posts?.map((item) => ({
    loc: `https://www.julyclient.vercel.app/service/${item.url}`,
    lastmodi: new Date().toISOString(),
  }));
  return getServerSideSitemap(context, fields);
}

export default function Site() {}
