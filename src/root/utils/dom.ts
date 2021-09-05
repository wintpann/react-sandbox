export const findFirstParentWith = (
    node: HTMLElement | null,
    predicate: (n: HTMLElement) => boolean,
    maxLevel = 10,
): [offset: number, node: HTMLElement | null] => {
    let suitableParent = null;
    let currentLevel = 0;
    let currentNode = node;

    if (!currentNode) {
        return [currentLevel, suitableParent];
    }

    const digUp = (): void => {
        if (currentLevel >= maxLevel) {
            return;
        }

        currentLevel++;

        const upperParent = currentNode?.parentElement;
        if (!upperParent) {
            return;
        }

        const isSuitable = predicate(upperParent);
        if (isSuitable) {
            suitableParent = upperParent;
            return;
        }

        currentNode = upperParent;

        digUp();
    };

    digUp();

    return [currentLevel, suitableParent];
};
