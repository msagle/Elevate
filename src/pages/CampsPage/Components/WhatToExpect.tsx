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
                        <ul>
                            <li><strong><span>ASPIRE to Pre-Juvenile</span></strong></li>
                            <li><strong><span>Juvenile to Intermediate Skating Skills Levels</span></strong></li>
                            <li><strong><span>Novice to Junior Skating Skills Levels</span></strong></li>
                        </ul>
                        The camp is two days long for both the Juvenile - Intermediate and Novice - Junior groups while the camp is only a half day experience for the ASPIRE - Pre-Juvenile group. 
                        Below are the dates and times when each level will be taking place: 
                        <br />
                        <br />
                        <ul>
                            <li><strong>ASPIRE - Pre-Juvenile:</strong>
                                <li>Saturday, July 13th - 8:00AM - 12:30PM</li>
                            </li>
                            <br />
                            <li><strong>Juvenile - Intermediate Skating Skills Levels:</strong>
                                <li>Saturday, July 13th from 11:30AM to 6:45PM</li>
                                <li>Sunday, July 14th from 9:00AM to 3:00PM</li>
                            </li>
                            <br />
                            <li><strong>Novice - Junior Skating Skills Levels</strong>
                                <li>Friday, July 12th from 2:00PM to 7:30PM</li>
                                <li>Saturday, July 13th from 9:15AM to 6:00PM</li>
                            </li>
                        </ul>
                    </p>
                    <div id={styles["insta"]}>
                        <InstagramEmbed url="https://www.instagram.com/p/C4yh-2FxHa0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={320} height={530}/>
                    </div>
                </div>
                <div>
                    <p>
                        The camp consists of a little over 13 hours of on- ice training for the latter two groups and 1.5 hours of on-ice training for the ASPIRE - Pre-Juvenile group. 
                        On the ice, we will be working on various essential synchro skills like turns, twizzles, pair elements, and general skating skills. 
                        In past camps, we have worked on artistry, dance, team building, stretching, learning judging system rules, and sports psychology during off-ice sessions.
                        <br />
                        <br />
                        These are long hours, so we will be providing many allergy-friendly snacks throughout the camp. As of right now, 
                        skaters must bring their own lunches to camp on Saturday and Sunday. The camp is not a sleep away camp. 
                        <br />
                    </p>
                </div>
            </div>
        </div>
    );
};