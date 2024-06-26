import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown';
import styles from "./ArticlesPage.module.css";
import { Article, articleList } from './Articles/Articles';

//import Maia from "../../../../public/LessonsLearned_MaiaLaats.md"

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

    useEffect(() => { article && fetch(article.markdownText)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
            })
            .then((text) => {
                setArticleMarkdown(text);
            })
            .catch((error) => {
                console.error('Error fetching markdown:', error);
                // Optionally, set a fallback or display an error message in your UI
            });
        }, [article]);
    

    return ( article ? 
        <div className={styles.articleGenContainer}>
            <Link to="/articles" style={{ textDecoration: 'none' }}>
                <div className={styles.backArrowDiv}>
                    <i className='bx bx-chevron-left'></i>
                    Back to Articles
                </div>
            </Link>
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
        :
        <div></div>
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
