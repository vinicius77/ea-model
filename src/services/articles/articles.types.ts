import { IArticle, IArticleData, ICommentData } from 'tests/entities';

export interface IArticleService {
  getAll(): IArticleData[];
  getOneById(id: number): IArticle | undefined;
  createComment(id: number, data: ICommentData): IArticle;
}

export interface IArticleServiceMock {
  getAll: jest.Mock<IArticleData[]>;
  getOneById: jest.Mock<IArticle | undefined>;
  createComment: jest.Mock<IArticle>;
}
