import { Link } from 'react-router-dom';
import { Article, articleList } from "./Articles/Articles";
import styles from "./ArticlesPage.module.css"

export default function ArticlePreviewBox(props: ArticlePreviewBoxProps) {
    return (
        <div className={styles.articlePreviewBoxContainer}>
            <img src={props.article.titlePicture} alt={"abc"} className={styles.cloudyImage}/>
            <Link to={`/articles/${props.article.articleId}`} style={{textDecoration: 'none'}}>
                <h4>{props.article.title}</h4>
            </Link>
        </div>
    );
}

export interface ArticlePreviewBoxProps {
    article: Article;
}