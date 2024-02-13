import Laura from "../TeamPage/Headshots/LauraHeadshot.jpg";
import Brynn from "../TeamPage/Headshots/BrynnHeadshot.jpg";
import Maddie from "../TeamPage/Headshots/MaddieHeadshot.jpg"
import Kyan from "../TeamPage/Headshots/KyanHeadshot.jpg";
import Haley from "../TeamPage/Headshots/HaleyHeadshot.png";

export interface TeamProfile {
    picture: string;
    name: string;
    description: string;
    team: "Haydenettes" | "Miami University" | "Skyliners" | "Hayden Select";
}

// add all team members here!
export const profiles: TeamProfile[] = [
    //Laura
    {
        picture: Laura,
        name: "Laura Nicula",
        description: "Laura Nicula, Founder of ELEVATE Synchronized Skating, is a third-year member of the Haydenettes and a junior Weissman Scholar at Babson College. Prior to skating for the Haydenettes, Laura skated on Saint Louis Synergy's Junior and Juvenile level synchronized skating teams. Her favorite synchro memory is competing the Long Program at the 2022 World Championships in Hamilton, Canada. When she's on the ice, Laura loves coaching skating skills and drills!",
        //description: "lorom ipsum doler",
        team: "Haydenettes"
    },
    //Brynn
    {
        picture: Brynn,
        name: "Brynn LaMear",
        description: "Brynn LaMear is a Founder of ELEVATE Synchronized Skating and is a first-year member of Miami University's Senior Varsity Synchronized Skating team. Brynn skated with Miami University's Collegiate team for two seasons, taking home the national championship title in 2022. Growing up, Brynn skated for Saint Louis Synergy where she discovered her love for synchro and coaching. Her favorite element is the pivot block! Brynn's favorite synchro memory is skating the free program at her first international competition in Salzburg, Austria.",
        team: "Miami University"
    },
    //Maddie
    {
        picture: Maddie,
        name: "Maddie Beery",
        description: "Maddie Beery is a second-year member of the Haydenettes and a sophomore at Boston University's Questrom School of Business. Prior to moving to Boston, she lived in Glen Ellyn, IL and skated for the Starlights Synchronized Skating organization. Her favorite synchro memory is being part of the first Starlights Junior team to represent the U.S. at the 2019 Junior World Synchronized Skating Championships. Maddie's favorite elements to teach are Moves in the Field, especially spirals!",
        team: "Skyliners"
    },
    //Kyan
    {
        picture: Kyan,
        name: "Kyan LaMear",
        description: "Kyan LaMear has skated for Saint Louis Synergy for eleven seasons and spent her last four on the Saint Louis Synergy Junior Team. She is a senior in high school at Visitation Academy. Her favorite synchro memory is from 2019, when she competed at the junior level for the first time in Anaheim, California. The twizzles and moves elements are some of her favorites to skate. A fun fact about her is that she has two guinea pigs!",
        team: "Haydenettes"
    },
    //Haley
    {
        picture: Haley,
        name: "Haley Weilbacher",
        description: "Haley Weilbacher is a second-year member of the Hayden Synchronized Skating organization. She currently skates for Hayden Select, the first Elite 12 team in the United States, and was a member of the Lexettes the year prior. Haley also skated for Saint Louis Synergy for 12 seasons and spent her last three years on Saint Louis Synergy Junior. She is currently a sophomore at Northeastern University studying chemical engineering. Her favorite element is the twizzles, and her favorite synchro memory is winning her first national medal at the 2022 U.S. Synchronized Skating Championships in Colorado Springs, CO.",
        team: "Hayden Select"
    }
]

