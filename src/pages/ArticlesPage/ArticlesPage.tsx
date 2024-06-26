import { Link } from 'react-router-dom';
import { articleList } from "./Articles/Articles";

export default function ArticlesPage() {
    return (
        <div>
            <ul>
                {articleList.map(({ articleId, title }) => (
                    <li key={articleId}>
                        <Link to={`/articles/${articleId}`}><strong>{title}</strong></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
