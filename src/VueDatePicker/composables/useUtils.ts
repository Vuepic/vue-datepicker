export const useUtils = () => {
    const boolHtmlAttribute = (value: boolean | undefined) => {
        return value ? true : undefined;
    };

    return {
        boolHtmlAttribute,
    };
};
