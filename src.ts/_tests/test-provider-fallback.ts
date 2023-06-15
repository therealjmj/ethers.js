import assert from 'assert';
import { FallbackProvider } from '../providers/provider-fallback';

describe.only('Test Fallback Provider', function () {
  it('sorts set of provider configs ascending by priority', function () {
    const fallbackProvider = new FallbackProvider([]);

    const allConfigs = [
      {
        priority: 3,
      },
      {
        priority: 1,
      },
      {
        priority: 2,
      },
    ] as any[];

    // Ascending
    // @ts-expect-error
    fallbackProvider.#sortConfigsByAscendingPriority(
      (a: any, b: any) => a.priority - b.priority,
    );
    assert.deepEqual(
      allConfigs.map((c) => c.priority),
      [1, 2, 3],
    );
  });
});
