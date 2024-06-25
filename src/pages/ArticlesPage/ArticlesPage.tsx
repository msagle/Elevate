import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import styles from "./ArticlesPage.module.css";

import Maia from "./Articles/LessonsLearned_MaiaLaats.md";
import MaiaPodium from "./Articles/MaiaArticle/MaiaPictures/Maia_WorldsPodium.jpg";
import MaiaSplitLift from "./Articles/MaiaArticle/MaiaPictures/Maia_SplitLift.jpg";
import MaiaQuestMedals from "./Articles/MaiaArticle/MaiaPictures/Maia_QuestMedals.jpg";
import MaiaSD from "./Articles/MaiaArticle/MaiaPictures/Maia_SweetDreams.jpg";

export default function ArticlesPage() {
    const [postMarkdown, setPostMarkdown] = useState('');

    // useEffect with an empty dependency array (`[]`) runs only once
    useEffect(() => {
        fetch(Maia)
            .then((response) => response.text())
            .then((text) => {
                setPostMarkdown(text);
            });
        }, 
    []);


    return (
        <div className={styles.articleContainer}>
            <h1>Lessons Learned from 5 Years on the Haydenettes with Maia Laats</h1>
            <div className={styles.imgWithCaption}>
                <img src={MaiaPodium} alt={"Maia Laats on the World Podium"} />
                <p>Maia Laats representing the Haydenettes on the 2024 World Synchronized Skating Championship Podium.</p>
            </div>
            <div className={styles.markdownContainer}>
                <Markdown className={styles.markdown}>{postMarkdown}</Markdown>
            </div>
            <div className={styles.endImageGroup}>
                <img src={MaiaSplitLift} alt={"Laats lifted in the Haydenettes 2020 freeskate."} />
                <img src={MaiaQuestMedals} alt={"Laats and fellow Haydenettes with their 2023 National Championship Medals."} />
                <img src={MaiaSD} alt={"Laats performing the 2022 Haydenette short program."} />
            </div>
        </div>
    );
};
