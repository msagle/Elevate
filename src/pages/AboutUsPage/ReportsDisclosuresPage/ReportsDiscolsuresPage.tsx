import React from 'react';
import styles from "./ReportsDisclosuresPage.module.css"
import pdf from "../../../types.s";
import MissionMenu from '../MissionPage/MissionMenu';

const FY2023TaxReturn = pdf("/docs/FY2023_Tax_Return.pdf");
const designation501 = pdf("/docs/501(c)(3)_Designation_Letter.pdf");
const certIncorporation = pdf("/docs/Certificate_of_Incorporation.pdf");

export default function ReportsDisclosuresPage() {
    return (
        <div className={styles.pageBody}>
            <MissionMenu />
            <div className={styles.financialMessage}>
                <br />
                <h1>Financial Reports: Coming Soon!</h1>
                <p>
                    We are committed to maintaining transparency and accountability in our financial practices. Our team is diligently working on compiling comprehensive financial reports to provide you with detailed insights into our financial health and operations.
                    <br />
                    <br />
                    Please check back soon to view our full financial disclosures, including annual reports, budget summaries, and other important fiscal information. We appreciate your patience and support as we finalize these documents.
                    <br />
                    <br />
                    Thank you for your continued trust and commitment to our mission.
                </p>
            </div>
            <div className={styles.financialDocRow}>
                <div className={styles.financialDocColumn}>
                    <h4>Financial & Tax</h4>
                    <ul>
                        <li>
                            <a href={FY2023TaxReturn} target="_blank" rel="noreferrer"> 
                                FY2023 Tax Return
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.financialDocColumn}>
                    <h4>Regulatory Filings</h4>
                    <ul>
                        <li>
                            <a href={designation501} target="_blank" rel="noreferrer"> 
                                501(c)(3) Designation
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.financialDocColumn}>
                    <h4>Regulatory Findings</h4>
                    <ul>
                        <li>
                            <a href={certIncorporation} target="_blank" rel="noreferrer"> 
                                Certificate of Incorporation
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};