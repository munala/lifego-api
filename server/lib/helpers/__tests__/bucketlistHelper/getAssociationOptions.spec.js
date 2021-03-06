const { getAssociationOptions } = require('../../bucketlistHelper');

describe('getAssociationOptions tests', () => {
  test('returns children', () => {
    const associationOptions = getAssociationOptions();

    expect(associationOptions).toHaveProperty('include');
    expect(associationOptions).toHaveProperty('order');
  });
});
