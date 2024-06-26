import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import styles from "./ArticlesPage.module.css";

export default function ArticleGenerator(props: ArticleGeneratorProps) {
    
    return (
        <div className={styles.articleContainer}>
            <h1>{props.title}</h1>
            <div className={styles.imgWithCaption}>
                <img src={props.titlePicture} alt={""}/>
                <p>{props.titlePictureCaption}</p>
            </div>
            <div className={styles.markdownContainer}>
                <Markdown className={styles.markdown}>{props.markdownText}</Markdown>
            </div>
            <div className={styles.endImageGroup}>
                {props.endImageGroup.map((path) => (
                    <img src={path} alt={""} />
                ))}
            </div>
        </div>
    );
};

export interface ArticleGeneratorProps {
    title: string;
    titlePicture: string;
    titlePictureCaption: string;
    markdownText: string;
    endImageGroup: string[];
}
