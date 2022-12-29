import { mockArticlesService } from './articles';
import { IProviderMock } from './provider.types';

export const mockProvider = (): IProviderMock => ({
  articles: mockArticlesService(),
});
