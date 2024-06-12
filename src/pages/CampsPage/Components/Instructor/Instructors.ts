import Laura from "./Headshots/LauraNicula24.jpg";
import LauraBio from "./Bios/LauraBio24.png";
import Brynn from "./Headshots/BrynnLaMear24.png";
import BrynnBio from "./Bios/BrynnBio24.png";
import Molly from "./Headshots/MollyMcMahon24.png";
import MollyBio from "./Bios/MollyBio24.png";
import Maddie from "./Headshots/MaddieBeery24.png"
import MaddieBio from "./Bios/MaddieBio24.png";
import Gabriella from "./Headshots/GabriellaRomano24.png";
import GabriellaBio from "./Bios/GabriellaBio.png";
import Stephen from "./Headshots/StephenMurray24.png";
import StephenBio from "./Bios/StephenBio24.png";
import Jordan from "./Headshots/JordanAlexander24.png";
import JordanBio from "./Bios/JordanBio24.png";
import Kristen from "./Headshots/KristenAlexander24.png";
import KristenBio from "./Bios/KristenBio24.png";
import Elyse from "./Headshots/ElyseWiese24.png";
import ElyseBio from "./Bios/ElyseBio24.png";

export interface Instructors {
    picture: string;
    name: string;
    team: string;
    bio: string;
}

// add all team members here!
export const profiles: Instructors[] = [
    //Laura
    {
        picture: Laura,
        name: "Laura Nicula",
        team: "Haydenettes",
        bio: LauraBio
    },
    //Brynn
    {
        picture: Brynn,
        name: "Brynn LaMear",
        team: "Miami University Senior Varsity",
        bio: BrynnBio
    },
    //Molly
    {
        picture: Molly,
        name: "Molly McMahon",
        team: "Haydenettes & Skyliners Senior",
        bio: MollyBio
    },
    //Maddie
    {
        picture: Maddie,
        name: "Maddie Beery",
        team: "Skyliners Senior & Haydenettes",
        bio: MaddieBio
    },
    //Gabriella
    {
        picture: Gabriella,
        name: "Gabriella Romano",
        team: "Skyliners Senior & Haydenettes",
        bio: GabriellaBio
    },
    //Stephen
    {
        picture: Stephen,
        name: "Stephen Murray",
        team: "Haydenettes",
        bio: StephenBio
    },
    //Jordan
    {
        picture: Jordan,
        name: "Jordan Alexander",
        team: "Skyliners Senior & Haydenettes",
        bio: JordanBio

    },
    //Kristin
    {
        picture: Kristen,
        name: "Kristen Alexander",
        team: "Skyliners Senior",
        bio: KristenBio

    },
    //Elyse
    {
        picture: Elyse,
        name: "Elyse Wiese",
        team: "Haydenettes",
        bio: ElyseBio
    }
]

