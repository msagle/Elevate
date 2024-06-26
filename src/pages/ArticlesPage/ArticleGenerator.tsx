import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Markdown from 'react-markdown';
import styles from "./ArticlesPage.module.css";
import { Article, articleList } from './Articles/Articles';

function getArticle (param: string) {
    return (param === "5_lessons_maia_laats" ? articleList[0] : articleList[1]);
};

export default function ArticleGenerator() {
    const { articleId } = useParams<{ articleId: string}>();
    const [article, setArticle] = useState<Article>();
    const [articleMarkdown, setArticleMarkdown] = useState<string>();

    useEffect(() => {
        if (articleId) {
            setArticle(getArticle(articleId));
        }
    }, 
    [articleId]);

    useEffect(() => { article &&
        fetch(article.markdownText)
            .then((response) => response.text())
            .then((text) => {
                setArticleMarkdown(text);
            });
        }, 
    [article]);
    

    return ( article && 
        <div className={styles.articleContainer}>
            <h1>{article.title}</h1>
            <div className={styles.imgWithCaption}>
                <img src={article.titlePicture} alt={""}/>
                <p>{article.titlePictureCaption}</p>
            </div>
            <div className={styles.markdownContainer}>
                <Markdown className={styles.markdown}>{articleMarkdown}</Markdown>
            </div>
            <div className={styles.endImageGroup}>
                {article.endImageGroup.map((path) => (
                    <img src={path} alt={""} />
                ))}
            </div>
        </div>
    );
};

/*
export interface ArticleGeneratorProps {
    title: string;
    titlePicture: string;
    titlePictureCaption: string;
    markdownText: string;
    endImageGroup: string[];
}
*/
