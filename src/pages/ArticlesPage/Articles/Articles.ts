//import Maia from "../../../../public/LessonsLearned_MaiaLaats.md";
import MaiaPodium from "./MaiaArticle/MaiaPictures/Maia_WorldsPodium.jpg";
import MaiaSplitLift from "./MaiaArticle/MaiaPictures/Maia_SplitLift.jpg";
import MaiaQuestMedals from "./MaiaArticle/MaiaPictures/Maia_QuestMedals.jpg";
import MaiaSD from "./MaiaArticle/MaiaPictures/Maia_SweetDreams.jpg";

export interface Article {
    articleId: string;
    title: string;
    titlePicture: string;
    titlePictureCaption: string;
    markdownText: string;
    endImageGroup: string[];
}

// add all team members here!
export const articleList: Article[] = [
    //Maia article
    {
        articleId: "5_lessons_maia_laats",
        title: "Lessons Learned from 5 Years on the Haydenettes with Maia Laats",
        titlePicture: MaiaPodium,
        titlePictureCaption: "Maia Laats representing the Haydenettes on the 2024 Synchronized Skating World Championship's Podium",
        markdownText: "https://github.com/msagle/Elevate/blob/laura-requests/public/LessonsLearned_MaiaLaats.md",
        endImageGroup: [MaiaSplitLift, MaiaQuestMedals, MaiaSD],
    },
/*
    //test article
    {
        articleId: "test_article",
        title: "Test Article",
        titlePicture: MaiaSplitLift,
        titlePictureCaption: "this is a test!",
        markdownText: "### TEST!",
        endImageGroup: [MaiaSplitLift, MaiaQuestMedals, MaiaSD],
    }
*/
]

