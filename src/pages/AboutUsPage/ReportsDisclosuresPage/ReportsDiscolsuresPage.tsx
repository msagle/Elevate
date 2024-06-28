import styles from "./ReportsDisclosuresPage.module.css"
import MissionMenu from '../MissionPage/MissionMenu';

/* Links to displayed reports and disclosure documents */
const FY2023TaxReturn = "https://drive.google.com/file/d/1liDXXE6A3PzyPlXAU4PlbLSUKufPdMhQ/view?usp=sharing";
const designation501c = "https://drive.google.com/file/d/1cdrwvMXWGYXWi7DRnssYGj3vciFWQFvo/view?usp=sharing";
const certIncorporation = "https://drive.google.com/file/d/17GjA4l0PkfH6VcGr4VC-8tO3WHyvDUY8/view?usp=sharing";

/**
 * ReportsDisclosuresPage component displays legal and financial records for ELEVATE.
 * 
 * @returns {JSX.Element} The rendered component.
 */
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
                            <a href={designation501c} target="_blank" rel="noreferrer"> 
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