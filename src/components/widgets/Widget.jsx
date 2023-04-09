import React from 'react'
import './Widget.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{ subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>Add to your feed</h2>
                <InfoIcon />
            </div>

            {newsArticle("Introduction to Web3", "Amazon")}
            {newsArticle("JavaScript", "Brad Traversy")}
            {newsArticle("ReactJS ", "John Smilga")}

        </div>
    );
}

export default Widgets;