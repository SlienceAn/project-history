import { useState } from 'react'
import { Editor, EditorState, convertFromRaw, RichUtils } from "draft-js"

const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
        {
            text: '',
            key: 'foo',
            type: 'unstyled',
            entityRanges: [],
            depth: 0,
            inlineStyleRanges: [],
            data: {}
        },
    ],
})
export default function Draft(): JSX.Element {
    const [editorState, setEditorState] = useState(EditorState.createWithContent(emptyContentState));
    const contentState = editorState.getCurrentContent()
    const BoldStyle = () => RichUtils.toggleInlineStyle(editorState, "BOLD")
    return (
        <div>
            <button onClick={BoldStyle}>BOLD</button>
            <Editor editorState={editorState} onChange={setEditorState} />
        </div>
    )
}