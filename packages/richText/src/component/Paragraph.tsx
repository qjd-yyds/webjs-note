import React from 'react';
import { Paragraph as ParagraphModel } from '../model/Paragraph';
import { Segment } from './Segment'

export function Paragraph(props: {paragraph: ParagraphModel}) {
    const { id, style, segments } = props.paragraph
    return (
        <div id={id} style={style}>
            {segments.map(segment => <Segment segment={segment}/>)}
        </div>
    );
}