import { IStyle } from "./IStyle";
import { generateNodeId } from "../util/id-generator";
import { Node } from "./Node";

export class Segment extends Node {
    public static create(json: any) {
        const {id, text, style} = json
        return new Segment(id, text, style)
    }

    public text: string
    public style: IStyle

    constructor(id = generateNodeId(), text = '', style = {}) {
        super(id, 'segment')
        this.text = text
        this.style = {...style}
    }

    public insertText(offset: number, text: string) {
        if (offset < 0 || offset > this.text.length) {
            return
        }
        if (!text) {
            return
        }
        this.text = this.text.slice(0, offset) + text + this.text.slice(offset)
    }

    public deleteText(offset: number, length: number){
        if (offset < 0 || offset + length > this.text.length) {
            return
        }
        if (length === 0) {
            return
        }
        this.text = this.text.slice(0, offset) + this.text.slice(offset + length)
    }

    public addStyle(name: string, value: string) {
        if (!name) {
            return
        }
        if (!value) {
            delete this.style[name]
        }
        this.style = {
            ...this.style,
            [name]: value
        }
    }

    public split(index: number) {
        const before = this.text.slice(0, index)
        const after = this.text.slice(index)
        this.text = before
        return [
            this,
            Segment.create({
                text: after,
                style: this.style
            })
        ]
    }
}