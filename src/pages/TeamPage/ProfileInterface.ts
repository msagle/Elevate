import Laura from "../TeamPage/Headshots/LauraNicula24.jpg";
import Brynn from "../TeamPage/Headshots/BrynnHeadshotNew.jpg";
import Maddie from "../TeamPage/Headshots/MaddieHeadshot.jpg"
import Kyan from "../TeamPage/Headshots/KyanLaMear24.jpg";
import Haley from "../TeamPage/Headshots/HaleyWeilbacher24.png";
import Mikayla from "../TeamPage/Headshots/MikaylaSagle24.jpg";
import Molly from "../TeamPage/Headshots/MollyHeadshot.jpg";

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
        description: "Laura Nicula, Founder of ELEVATE Synchronized Skating, is a fifth-year member of the Haydenettes and a recent graduate from Babson College. Prior to skating for the Haydenettes, Laura skated on Saint Louis Synergy's Junior and Juvenile level synchronized skating teams. Her favorite synchro memory is competing the Long Program at the 2022 World Championships in Hamilton, Canada. When she's on the ice, Laura loves coaching skating skills and drills!",
        //description: "lorom ipsum doler",
        team: "Haydenettes"
    },
    //Brynn
    {
        picture: Brynn,
        name: "Brynn LaMear",
        description: "Brynn LaMear is a Founder of ELEVATE Synchronized Skating and is a former member of Miami University's Senior Varsity Synchronized Skating team. Brynn also skated with Miami University's Collegiate team for two seasons, taking home the national championship title in 2022. Growing up, Brynn skated for Saint Louis Synergy where she discovered her love for synchro and coaching. Her favorite element is the pivot block! Brynn's favorite synchro memory is skating the free program at her first international competition in Salzburg, Austria.",
        team: "Miami University"
    },
    //Maddie
    {
        picture: Maddie,
        name: "Maddie Beery",
        description: "Maddie Beery is a second-year member of the Skyliners Senior and a senior at Boston University's Questrom School of Business. Prior to moving to Boston, she lived in Glen Ellyn, IL and skated for the Starlights Synchronized Skating organization. Her favorite synchro memory is being part of the first Starlights Junior team to represent the U.S. at the 2019 Junior World Synchronized Skating Championships. Maddie's favorite elements to teach are Moves in the Field, especially spirals!",
        team: "Skyliners"
    },
    //Molly
    {
        picture: Molly,
        name: "Molly McMahon",
        description: "Molly McMahon is a former member of the Haydenettes and has been a member of the DREAM program for the past five years. Before joining the Haydenettes, Molly skated as a member of Skyliners Senior for four seasons while pursuing her education at Quinnipiac University in Hamden, CT. Molly grew up in Fond du Lac, WI and spent twelve years with the Fond du Lac Blades organization, progressing from the Beginner to Junior teams. With a profound passion for synchronized skating, Molly finds joy in choreography, performance and the collaborative team dynamics that synchro brings to figure skating!",
        team: "Haydenettes"
    },
    //Mikayla
    {
        picture: Mikayla,
        name: "Mikayla Sagle",
        description: "Mikayla Sagle is a former member of the Haydenettes, and previously skated with Hayden Select. She's a recent graduate from Northeastern University and studied computer engineering and computer science. She made this website! Her favorite synchro memory was winning the first ever national title in the Elite 12 division at the 2023 U.S. Synchronized Skating Championships in Peoria, IL.",
        team: "Haydenettes"
    },
]

