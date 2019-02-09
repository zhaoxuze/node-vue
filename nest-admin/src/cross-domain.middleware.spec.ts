import { CrossDomainMiddleware } from './cross-domain.middleware';

describe('CrossDomainMiddleware', () => {
  it('should be defined', () => {
    expect(new CrossDomainMiddleware()).toBeDefined();
  });
});
