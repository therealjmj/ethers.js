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
        ];
        // Ascending
        // @ts-expect-error
        fallbackProvider.#sortConfigsByAscendingPriority((a, b) => a.priority - b.priority);
        assert.deepEqual(allConfigs.map((c) => c.priority), [1, 2, 3]);
    });
});
//# sourceMappingURL=test-provider-fallback.js.map