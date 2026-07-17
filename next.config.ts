import createNextIntlPlugin from 'next-intl/plugin';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
};

export default withNextIntl(nextConfig);
