//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = 'www.22febmmwa.vercel.app/search';

function generateSiteMap(products) {
  const HOSTING_APP_NAME = '22febmmwa';

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
			 <loc>https://www.22febmmwa.vercel.app/about-us</loc>
      </url>
			<url>
			 <loc>https://www.22febmmwa.vercel.app/contact-us</loc>
     </url>
		 <url>
       <loc>https://www.22febmmwa.vercel.app/search</loc>
    </url>
    <url>
		   <loc>https://www.22febmmwa.vercel.app/search-posts</loc>
    <url>
		</url>
			 <loc>https://www.22febmmwa.vercel.app/search-services</loc>
     </url>
     ${(
       <url>
         <loc>
           https://www.{`${HOSTING_APP_NAME}`}.vercel.app/search-courses
         </loc>
       </url>
     )}

     ${products
       .map(({ id }) => {
         return `
       <url>
           <loc>https://www.22febmmwa.vercel.app/product/${`${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const products = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(products);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
