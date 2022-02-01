import { Node } from "./Node";
import { generateNodeId } from "../util/id-generator";
import { Paragraph } from "./Paragraph";
import { Segment } from "./Segment";

export class Document extends Node {
    public static empty() {
        return Document.create({
            nodes: [{ segments: [{ text: '' }] }]
        })
    }

    public static create(json: any) {
        const {id, nodes} = json
        return new Document(id, nodes.map((node: Node) => {
            return Paragraph.create(node)
        }))
    }

    public nodes: Node[]
    constructor(id = generateNodeId(), nodes = []) {
        super(id, 'document')
        this.nodes = nodes
    }

    public insertText(id: string, offset: number, text: string) {
        const node = this.findNodeById(id)
        if (!node || !(node instanceof Segment)) {
            return
        }
        (node as Segment).insertText(offset, text)
    }

    public deleteText(id: string, offset: number, length: number) {
        const node = this.findNodeById(id)
        if (!node || !(node instanceof Segment)) {
            return
        }
        (node as Segment).deleteText(offset, length)
    }

    public addInlineStyle(startId: string, startOffset: number, endId: string, endOffset: number, name: string, value: string) {
        const nodes = this.findSegmentsByStartAndEnd(startId, endId)
        if (nodes.length < 1) {
            return [startId, startOffset, endId, endOffset]
        }

        const first = nodes[0]
        const firstPara = this.findParentNodeById(first.id) as Paragraph
        const [,after] = firstPara.split(first.id, startOffset)
        after.addStyle(name, value)

        const last = nodes[nodes.length - 1]
        const lastPara = this.findParentNodeById(last.id) as Paragraph
        const [before,] = lastPara.split(last.id, endOffset)
        before.addStyle(name, value)

        nodes.slice(1, nodes.length - 1).forEach(node => node.addStyle(name, value))
        return [after.id, 0, before.id, endOffset]
    }

    public addParagraphStyle(id: string, offset: number, name: string, value: string) {
        const paragraph = this.findParentNodeById(id) as Paragraph
        paragraph.addStyle(name, value)
    }

    public splitParagraph(id: string, offset: number) {
        const paragraph = this.findParentNodeById(id) as Paragraph

        const [before, after] = paragraph.split(id, offset, true) as Paragraph[]
        const index = this.nodes.findIndex(node => node.id === paragraph.id)

        const head = this.nodes.slice(0, index)
        const tail = this.nodes.slice(index + 1)

        this.nodes = head.concat([before, after]).concat(tail)
        return index
    }

    public findNodeById(id: string) {
        if (this.id === id) {
            return this
        }
        for (const node of this.nodes) {
            if (node.id === id) {
                return node
            }
            if (node.type === 'paragraph') {
                for (const segment of (node as Paragraph).segments) {
                    if (segment.id === id) {
                        return segment
                    }
                }
            }
        }
    }

    public findParentNodeById(id: string) {
        if (this.id === id) {
            return null
        }
        for (const node of this.nodes) {
            if (node.id === id) {
                return this
            }
            if (node.type === 'paragraph') {
                for (const segment of (node as Paragraph).segments) {
                    if (segment.id === id) {
                        return node
                    }
                }
            }
        }
    }

    public findSegmentsByStartAndEnd(startId: string, endId: string) {
        const result = []
        let findStart = false
        for (const node of this.nodes) {
            if (node.type !== 'paragraph') {
                continue
            }
            const paragraph = node as Paragraph
            for (const segment of paragraph.segments) {
                if (segment.id === startId) {
                    result.push(segment)
                    findStart = true
                    continue
                }
                if (segment.id === endId) {
                    result.push(segment)
                    return result
                }
                if (findStart) {
                    result.push(segment)
                }
            }
        }
        return result
    }

    public findIndex(id: string) {
        return this.nodes.findIndex(node => node.id === id)
    }

    public cloneContents(startId: string, startOffset: number, endId: string, endOffset: number){
        const newDocument = Document.create(this)

        newDocument.splitParagraph(startId, startOffset)
        const startParagraph = newDocument.findParentNodeById(startId) as Paragraph
        const startIndex = newDocument.findIndex(startParagraph.id)

        newDocument.splitParagraph(endId, endOffset)
        const endParagraph = newDocument.findParentNodeById(endId) as Paragraph
        const endIndex = newDocument.findIndex(endParagraph.id)

        return newDocument.nodes.slice(startIndex + 1, endIndex + 1)
    }

    public insertNodes(id: string, offset: number, nodes: Paragraph[]) {
        this.splitParagraph(id, offset)
        const paragraph = this.findParentNodeById(id)
        const index = this.findIndex(id)
        this.nodes = this.nodes.slice(0, index).concat(nodes).concat(this.nodes.slice(index))
    }
}