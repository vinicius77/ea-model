import { Article, IArticle, IArticleData, ICommentData, Comment } from '../../../tests/entities';
import { IArticleService } from './articles.types';

export class ArticlesService implements IArticleService {
  constructor(private readonly data: IArticleData[]) {}

  getAll(): IArticleData[] {
    return this.data;
  }

  getOneById(id: number): IArticle | undefined {
    const data = this.data.find((article) => article.id === id);

    if (!data) return;

    return new Article(data);
  }

  createComment(articleId: number, commentData: ICommentData): IArticle {
    const article = this.getOneById(articleId);
    if (!article) {
      throw new Error('Article does not exist!');
    }
    const comment = new Comment(commentData);

    if (!comment.validate()) {
      throw new Error('Comment is not valid!');
    }

    article.comments.push(comment);

    return article;
  }
}
