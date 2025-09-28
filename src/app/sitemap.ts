const BASE_URL = 'https://elenaustimenko.github.io/my-project-2025/';

type Sitemap = {
    url: string;
    lastModified: Date;
};

const sitemap = async (): Promise<Sitemap[]> => {
    const pages = ['', 'seoul', 'busan', 'jeju'];
    return pages.map(page => ({
        url: `${BASE_URL}/${page}`,
        lastModified: new Date()
    }));
};

export default sitemap;