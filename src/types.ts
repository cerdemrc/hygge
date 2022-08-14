export interface BlogState{
    id: string,
    title: string,
    author: string,
    image: string,
    category: string,
    content: string
}

export const BlogCategory: Array<string> = [
    'Science',
    'Music',
    'Self-Improvement',
    'Book',
    'Game',
    'Movie',
    'Food',
    'Travel'
];