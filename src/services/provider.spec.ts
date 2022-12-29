import { ArticlesService } from './articles';
import { provider } from './provider';

jest.mock('./articles');
describe(' >> Provider', () => {
  it('Should instantiate Articles Service', () => {
    provider();
    expect(ArticlesService.prototype.constructor);
  });
});
