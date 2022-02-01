import React from 'react';
import { Document as DocumentModel } from '../model/Document';
import { Paragraph as ParagraphModel } from '../model/Paragraph';
import { Paragraph } from './Paragraph'

export function Document(props: {document: DocumentModel}) {
    const { id, nodes } = props.document
    return (
        <div id={id}>{
            nodes.map((node) => {
                return <Paragraph paragraph={node as ParagraphModel}/>
            })
        }</div>
    );
}