import styles from '../CampsPage.module.css';
import { InstagramEmbed } from 'react-social-media-embed';

export default function WhatToExpect() {
    return (
        <div>
            <h2 className={styles.headerStyles}>
                What to Expect
            </h2>
            <div className={styles.whatToExpectContainer}>
                <div className={styles.whatToExpectInformationContainer}>
                    <p>
                        This year, the camp is organized into three distinct groups to cater to skaters of varying skill level depending on group placement: 
                        ASPIRE, Pre-Juvenile - Intermediate Skating Skills Levels, and Novice - Junior/Senior Skating Skills Levels. 
                        The camp is two days long for both the Pre-Juvenile - Intermediate and Novice - Junior/Senior groups while the camp is only a 1/2 day experience for the ASPIRE group. 
                        Below are the dates and times when each level will be taking place: 
                        <br />
                        <br />
                        <strong>ASPIRE - Pre-Juvenile:</strong> Saturday, July 13th - 8:00AM - 12:30PM <br/>
                        <strong>Juvenile - Intermediate Skating Skills Levels:</strong> Saturday, July 13th - 11:30AM-6:45PM & Sunday, July 14th - 9:00AM-3:00PM <br/>
                        <strong>Novice - Junior Skating Skills Levels:</strong> Friday, July 12th - 2:00PM-7:30PM & Saturday, July 13th 9:15AM-6:00PM <br/>
                        <br />
                        The camp consists of a little over 13 hours of on- ice training for the latter two groups and 1.5 hours of on-ice training for the ASPIRE group. 
                        On the ice, we will be working on various essential synchro skills like turns, twizzles, pair elements, and general skating skills. 
                        In past camps, we have worked on artistry, dance, team building, stretching, learning judging system rules, and sports psychology during off-ice sessions.
                        <br />
                        <br />
                        These are long hours, so we will be providing many allergy-friendly snacks throughout the camp. As of right now, 
                        skaters must bring their own lunches to camp on Saturday and Sunday. The camp is not a sleep away camp. 
                        <br />
                        <br />
                        We hope that these answer a few of the questions you may have about this year's camp. If you have any more questions or concerns, 
                        please feel free to reach out via email at <strong>elevatesynchro@gmail.com</strong>!
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url="https://www.instagram.com/reel/CunuwY8Ok8v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={350}/>
                </div>
            </div>
        </div>
    );
};