export type Snippet = {
    source: string;
    language: string;
    createdAt: Date;
};

export function createSnippet(source: string, language = 'text'): Snippet {
    if (!source.trim()) throw new Error('Snippet cannot be empty.');

    return {
        source,
        language,
        createdAt: new Date(),
    };
}
