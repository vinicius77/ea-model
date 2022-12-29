import { ArticlesService } from './articles';
import { IProvider } from './provider.types';
import data from './data.json';

export const provider = (): IProvider => ({
  articles: new ArticlesService(data),
});
