import { request } from '@/services/generic.service';

const getAd = (id) => request({ url: `ads/${id}`, method: 'get' });

const getAds = () => request({ url: `ads`, method: 'get' });

export { getAd, getAds };
