import { mockComments, mockArticles, mockArticlesData } from '../../../tests/entities';
import { ArticlesService } from './articles';

describe('>>> Articles Service', () => {
  const service = new ArticlesService(mockArticlesData());

  describe('>>> Get All Articles', () => {
    it('should return all data', () => {
      expect(service.getAll()).toEqual(mockArticlesData());
    });
  });

  describe('>>> Get Article By ID', () => {
    it('should return one article given and id', () => {
      const article = mockArticlesData()[0];
      const id = article.id;

      expect(service.getOneById(id)).toEqual(article);
    });
  });
});

describe('>>> Create Comment', () => {
  const service = new ArticlesService(mockArticlesData());
  const data = mockComments()[0];

  it('Should add a new comment to a given article', () => {
    const article = mockArticles()[0];
    const id = article.id;
    const commentsCount = article.comments.length;

    const newArticle = service.createComment(id, data);
    expect(newArticle.id).toEqual(article.id);
    expect(newArticle.comments.length).toEqual(commentsCount + 1);
  });

  it('Should throw an error if article by a given id does not exist', () => {
    expect(() => service.createComment(2345, data)).toThrow();
  });

  it('Should throw an error if comment is not valid', () => {
    const data = {
      ...mockComments()[0],
      title: '',
    };

    expect(() => {
      service.createComment(1, data);
    }).toThrow();
  });
});
