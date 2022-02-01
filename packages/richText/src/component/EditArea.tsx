import React, {KeyboardEvent, ClipboardEvent, useState} from 'react';
import { Document as DocumentModel } from '../model/Document';
import { Document } from './Document'
import { Paragraph } from '../model/Paragraph';
import { generateNodeId } from '../util/id-generator';

export function EditArea(props: {data: any}) {
    // const document = DocumentModel.create(props.data)
    const [document, setDocument] = useState(DocumentModel.create(props.data))

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Shift' ||
            event.key === 'Ctrl' ||
            event.key === 'Alt' ||
            event.key === 'Meta')
        {
            return
        }
        event.preventDefault()

        if (event.key === 'Backspace') {
            deleteText(true)
        } else if (event.key === 'Delete') {
            deleteText(false)
        } else if (event.key === 'b' && event.metaKey) {
            toggleBold()
        } else if (event.key === 'a' && event.metaKey && event.shiftKey) {
            applyCenter()
        } else if (event.key === 'Enter') {
            splitParagraph()
        } else {
            insertText(event)
        }
    }

    const insertText = (event: KeyboardEvent) => {
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) {
            return
        }

        const range = sel.getRangeAt(0)
        const startContainer = range.startContainer
        const parentEl = startContainer.parentElement
        const startOffset = range.startOffset
        const text = event.key
        // TODO
        if (!range.collapsed) {
            return
        }

        if (!parentEl) {
            return
        }

        const newDocument = DocumentModel.create(document)
        newDocument.insertText(parentEl.id, startOffset, text)
        setDocument(newDocument)

        setTimeout(() => {
            range.setEnd(startContainer, startOffset + text.length)
            range.setStart(startContainer, startOffset + text.length)
            sel.addRange(range)
        })
    }

    const deleteText = (backward: boolean) => {
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) {
            return
        }

        const range = sel.getRangeAt(0)
        const startContainer = range.startContainer
        const parentEl = startContainer.parentElement
        const startOffset = range.startOffset
        // TODO
        if (!range.collapsed) {
            return
        }

        if (!parentEl) {
            return
        }

        const start = backward ? startOffset - 1: startOffset
        if (start < 0) {
            return
        }

        const newDocument = DocumentModel.create(document)
        newDocument.deleteText(parentEl.id, startOffset, 1)
        setDocument(newDocument)

        setTimeout(() => {
            range.setEnd(startContainer, start)
            range.setStart(startContainer, start)
            sel.addRange(range)
        })
    }

    const toggleBold = () => {
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) {
            return
        }

        const range = sel.getRangeAt(0)

        const startContainer = range.startContainer
        const startParentEl = startContainer.parentElement
        const startOffset = range.startOffset
        const endContainer = range.endContainer
        const endParentEl = endContainer.parentElement
        const endOffset = range.endOffset
        // TODO
        if (range.collapsed) {
            return
        }

        if (!startParentEl || !endParentEl) {
            return
        }

        document.addInlineStyle(startParentEl.id, startOffset, endParentEl.id, endOffset, 'fontWeight', 'bold')
        setDocument(DocumentModel.create(document))

        setTimeout(() => {
            range.setEnd(endContainer, endOffset)
            range.setStart(endContainer, endOffset)
            sel.addRange(range)
        })
    }

    const applyCenter = () => {
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) {
            return
        }

        const range = sel.getRangeAt(0)
        const startContainer = range.startContainer
        const parentEl = startContainer.parentElement
        const startOffset = range.startOffset
        // TODO
        if (!range.collapsed) {
            return
        }

        if (!parentEl) {
            return
        }
        document.addParagraphStyle(parentEl.id, startOffset, 'textAlign', 'center')
        setDocument(DocumentModel.create(document))

        setTimeout(() => {
            range.setEnd(startContainer, startOffset)
            range.setStart(startContainer, startOffset)
            sel.addRange(range)
        })
    }

    const splitParagraph = () => {
        const sel = window.getSelection()
        if (!sel || !sel.rangeCount) {
            return
        }

        const range = sel.getRangeAt(0)
        const startContainer = range.startContainer
        const parentEl = startContainer.parentElement
        const startOffset = range.startOffset
        // TODO
        if (!range.collapsed) {
            return
        }

        if (!parentEl) {
            return
        }
        document.splitParagraph(parentEl.id, startOffset)
        setDocument(DocumentModel.create(document))

        setTimeout(() => {
            range.setEnd(startContainer, startOffset)
            range.setStart(startContainer, startOffset)
            sel.addRange(range)
        })
    }

    return (
        <div className="editArea"
            contentEditable="true"
            onKeyDown={onKeyDown}
        >
            <Document document = {document}/>
        </div>
    );
}




