import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import {
    BsTypeBold,
    BsTypeItalic,
    BsTypeUnderline,
    BsTypeH1,
    BsTypeH2,
    BsTypeH3,
    BsBlockquoteLeft,
    BsListUl,
    BsListOl
} from 'react-icons/bs'
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
const inlineTool = [
    { label: "Bold", style: "BOLD", icon: <BsTypeBold /> },
    { label: "Italic", style: "ITALIC", icon: <BsTypeItalic /> },
    { label: "Underline", style: "UNDERLINE", icon: <BsTypeUnderline /> },
]
const blockTool = [
    { label: "H1", style: "header-one", icon: <BsTypeH1 /> },
    { label: "H2", style: "header-two", icon: <BsTypeH2 /> },
    { label: "H3", style: "header-three", icon: <BsTypeH3 /> },
    { label: "Blockquote", style: "blockquote", icon: <BsBlockquoteLeft /> },
    { label: "UL", style: "unordered-list-item", icon: <BsListUl /> },
    { label: "OL", style: "ordered-list-item", icon: <BsListOl /> },
]
type editor = {
    label: string
    style: string
    icon: JSX.Element
    editorState: any,//?
    setEditorState: Dispatch<SetStateAction<EditorState>>
}
const InlineTool = ({ label, style, icon, editorState, setEditorState }: editor) => {
    const clickEvent = () => {
        const nextState = RichUtils.toggleInlineStyle(editorState, style)
        setEditorState(nextState)
    }
    return <button key={label} onClick={clickEvent}>{icon}</button>
}
const BlockTool = ({ label, style, icon, editorState, setEditorState }: editor) => {
    const clickEvent = () => {
        const nextState = RichUtils.toggleBlockType(editorState, style)
        setEditorState(nextState)
    }
    return <button key={label} onClick={clickEvent}>{icon}</button>
}
export default function Draft(): JSX.Element {
    const [editorState, setEditorState] = useState(EditorState.createWithContent(emptyContentState));
    const contentState = editorState.getCurrentContent()
    const [editor, setEditor] = useState(false)
    useEffect(() => setEditor(true), [editor])
    return (
        <>
            <div className='toolBtn'>
                {blockTool.map(el =>
                    <BlockTool
                        key={el.label}
                        label={el.label}
                        style={el.style}
                        icon={el.icon}
                        editorState={editorState}
                        setEditorState={setEditorState}
                    />
                )}
                {inlineTool.map(el =>
                    <InlineTool
                        key={el.label}
                        label={el.label}
                        style={el.style}
                        icon={el.icon}
                        editorState={editorState}
                        setEditorState={setEditorState}
                    />)}
            </div>
            <div className='editor'>
                {editor ? <Editor editorState={editorState} onChange={setEditorState} /> : null}
            </div>
        </>
    )
}