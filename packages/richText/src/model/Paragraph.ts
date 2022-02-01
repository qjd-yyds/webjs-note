import { IStyle } from "./IStyle";
import { Segment } from "./Segment";
import { generateNodeId } from "../util/id-generator";
import { Node } from "./Node";

export class Paragraph extends Node {
    public static create(json: any) {
        const {id, style, segments} = json
        return new Paragraph(id, style, segments.map(Segment.create))
    }

    public style: IStyle
    public segments: Segment[]
    constructor(id = generateNodeId(), style = {}, segments = []) {
        super(id, 'paragraph')
        this.style = style
        this.segments = segments
    }

    public split(segmentId: string, offset: number, splitSelf: boolean = false) {
        const index = this.segments.findIndex(segment => segmentId === segment.id)
        if (index < 0) {
            return []
        }

        const [before, after] = this.segments[index].split(offset)
        const head = this.segments.slice(0, index)
        const tail = this.segments.slice(index + 1)

        if (splitSelf) {
            this.segments = head.concat([before])
            return [
                this,
                Paragraph.create({
                    style: this.style,
                    segments: [after].concat(tail)
                })
            ]
        } else {
            this.segments = head.concat([before, after]).concat(tail)
            return [before, after]
        }
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
}