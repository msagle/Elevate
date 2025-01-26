//import Maia from "../../../../public/LessonsLearned_MaiaLaats.md";
import MaiaPodium from "./MaiaArticle/MaiaPictures/Maia_WorldsPodium.jpg";
import MaiaSplitLift from "./MaiaArticle/MaiaPictures/Maia_SplitLift.jpg";
import MaiaQuestMedals from "./MaiaArticle/MaiaPictures/Maia_QuestMedals.jpg";
import MaiaSD from "./MaiaArticle/MaiaPictures/Maia_SweetDreams.jpg";
import KyanBow from "./KyanArticle/KyanPictures/KyanImg1.jpg"
import KyanSmile from "./KyanArticle/KyanPictures/KyanImg3.jpg"
import KyanExtension from "./KyanArticle/KyanPictures/KyanImg2.jpg"
import KyanElevate from "./KyanArticle/KyanPictures/KyanImg4.jpg"

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
    // Maia article
    {
        articleId: "5_lessons_maia_laats",
        title: "Lessons Learned from 5 Years on the Haydenettes with Maia Laats",
        titlePicture: MaiaPodium,
        titlePictureCaption: "Maia Laats representing the Haydenettes on the 2024 Synchronized Skating World Championship's Podium",
        markdownText: "/LessonsLearned_MaiaLaats.md",
        endImageGroup: [MaiaSplitLift, MaiaQuestMedals, MaiaSD],
    },
    // Kyan Article
    {
        articleId: "embracing_challenges_kyan_lamear",
        title: "Embracing Challenges and Growth: Kyan’s Journey So Far with the Haydenettes",
        titlePicture: KyanBow,
        titlePictureCaption: "Kyan LaMear taking a bow after the Haydenettes Short Program at the 2024 Budapest Cup",
        markdownText: "/EmbracingChallenges_KyanLaMear.md",
        endImageGroup: [KyanSmile, KyanExtension, KyanElevate],
    }

]

