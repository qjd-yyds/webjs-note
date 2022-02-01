import React, {useState} from 'react';
import { EditArea } from './EditArea'
import { Toolbar } from './Toolbar';
import { Document as DocumentModel } from '../model/Document';

export function Editor(props: {data: any}) {

    return (
        <div id='editor'>
            <Toolbar/>
            <EditArea data = {props.data}/>
        </div>
    );
}