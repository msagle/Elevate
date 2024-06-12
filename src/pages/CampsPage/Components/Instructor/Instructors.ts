import Laura from "./Headshots/LauraNicula24.jpg";
import Brynn from "./Headshots/BrynnLaMear24.png";
import Molly from "./Headshots/MollyMcMahon24.png";
import Maddie from "./Headshots/MaddieBeery24.png"
import Gabriella from "./Headshots/GabriellaRomano24.png";
import Stephen from "./Headshots/StephenMurray24.png";
import Jordan from "./Headshots/JordanAlexander24.png";
import Kristen from "./Headshots/KristenAlexander24.png";
import Elyse from "./Headshots/ElyseWiese24.png";

export interface Instructors {
    picture: string;
    name: string;
    team: string;
}

// add all team members here!
export const profiles: Instructors[] = [
    //Laura
    {
        picture: Laura,
        name: "Laura Nicula",
        team: "Haydenettes"
    },
    //Brynn
    {
        picture: Brynn,
        name: "Brynn LaMear",
        team: "Miami University Senior Varsity"
    },
    //Molly
    {
        picture: Molly,
        name: "Molly McMahon",
        team: "Haydenettes & Skyliners Senior"
    },
    //Maddie
    {
        picture: Maddie,
        name: "Maddie Beery",
        team: "Skyliners Senior & Haydenettes"
    },
    //Gabriella
    {
        picture: Gabriella,
        name: "Gabriella Romano",
        team: "Skyliners Senior & Haydenettes"
    },
    //Stephen
    {
        picture: Stephen,
        name: "Stephen Murray",
        team: "Haydenettes"
    },
    //Jordan
    {
        picture: Jordan,
        name: "Jordan Alexander",
        team: "Skyliners Senior & Haydenettes"

    },
    //Kristin
    {
        picture: Kristen,
        name: "Kristen Alexander",
        team: "Skyliners Senior"

    },
    //Elyse
    {
        picture: Elyse,
        name: "Elyse Wiese",
        team: "Haydenettes"
    }
]

