import { articleList } from "./Articles/Articles";
import styles from "./ArticlesPage.module.css"
import ArticlePreviewBox from './ArticlePreviewBox';

export default function ArticlesPage() {
    return (
        <div className={styles.articlePageContainer}>
            <h1>ELEVATING the Voices of Synchro</h1>
            <p>Check out some ELEVATE exclusive articles written by synchornized skaters for synchronized skaters!</p>
            <div className={styles.articleBoxContainer}>
                {articleList.map((art) => (
                    <ArticlePreviewBox article={art}/>
                ))}
            </div>
        </div>
    );
}
