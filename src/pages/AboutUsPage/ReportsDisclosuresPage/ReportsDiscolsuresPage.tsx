import React from 'react';
import styles from "./ReportsDisclosuresPage.module.css"


export default function ReportsDisclosuresPage() {
    return (
        <div className={styles.pageBody}>
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
                    Thank you for your continued trust and commitment to our mission
                </p>
            </div>
        </div>
    );
};