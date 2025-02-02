import { articleList } from "./Articles/Articles";
import styles from "./ArticlesPage.module.css"
import ArticlePreviewBox from './ArticlePreviewBox';

export default function ArticlesPage() {
    return (
        <div className={styles.articlePageContainer}>
            <div>
                <h1>ELEVATING the Voices of Synchro</h1>
                <p>Check out some ELEVATE exclusive articles written by synchronized skaters for synchronized skaters!</p>
            </div>
            <div className={styles.articleBoxContainer}>
                {articleList.map((art) => (
                    <ArticlePreviewBox article={art}/>
                ))}
            </div>
        </div>
    );
}
