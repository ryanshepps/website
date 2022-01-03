import { capitalize } from './string.js';

export const articleLinkPrefix = '/documentation';

export const getArticleLink = (articlePath) => articleLinkPrefix + articlePath;

export const formatFolderName = (folderName) => {
    const folderNameWords = folderName.split('/')[1].split('_');
    folderNameWords.forEach((word, index) => {
        folderNameWords[index] = capitalize(word);
    });

    return folderNameWords.join(' ');
};
