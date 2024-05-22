import Accordion from 'react-bootstrap/Accordion';
import styles from '../CampsPage.module.css';

export default function FAQComponent() {
    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.headerStyles}>FAQs</h2>
            <br />
            <p>
                Questions? Check out our FAQs below!
            </p>
            <div className={styles.accordion}>
                <Accordion alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span><strong>What if I can't attend a day of camp?</strong></span></Accordion.Header>
                        <Accordion.Body>
                            Simply email us! That's not a problem at all as long as we know you'll be absent.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span><strong>What is the required skill level?</strong></span></Accordion.Header>
                        <Accordion.Body>
                            This year, our camp is open to synchro skaters who currently compete in the Aspire through Junior divisions. 
                            While we would prefer skaters to have synchronized skating experience, none is required.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span><strong>What should I bring with me?</strong></span></Accordion.Header>
                        <Accordion.Body>
                            Please remember to bring a refillable water bottle and snacks.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><span><strong>What should I wear to camp?</strong></span></Accordion.Header>
                        <Accordion.Body>
                        Black leggings and an athletic shirt/tank top. For warm up and off-ice classes, athletic shoes are required.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <br />
            <p>
                If you have any more questions or concerns, please feel free to reach out via email at <span><strong>elevatesynchro@gmail.com</strong></span>!
            </p>
        </div>
        
    );
};