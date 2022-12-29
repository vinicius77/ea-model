import { IArticleService } from './articles.types';

export const mockArticlesService = (): IArticleService => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createComment: jest.fn(),
});
