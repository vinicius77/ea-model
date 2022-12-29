import { IArticleService, IArticleServiceMock } from './articles';

export interface IProvider {
  articles: IArticleService;
}

export interface IProviderMock {
  articles: IArticleServiceMock;
}
