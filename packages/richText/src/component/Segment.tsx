import React from 'react';
import { Segment as SegmentModel } from '../model/Segment';

export function Segment(props: {segment: SegmentModel}) {
    const { text = '&nbsp;', style, id } = props.segment
    return (
        <span id={id} style={style}>{text}</span>
    );
}