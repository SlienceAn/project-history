import { useState } from "react"
import useSWR from "swr"
import { BsFillPencilFill } from "react-icons/bs"
import { Editor, EditorState, convertFromRaw } from "draft-js"
// const emptyContentState = convertFromRaw({
//     entityMap: {},
//     blocks: [{
//         text: '',
//         key: 'foo',
//         type: 'unstyled',
//         entityRanges: [],
//         inlineStyleRanges:[]
//     }]
// })
export default function ProjectUpload() {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    return (
        <div className="col-md-6 col-sm-12 px-2 py-4 m-auto">
            <div className="card">
                <div className="card-header d-flex align-items-center">
                    <BsFillPencilFill fontSize="1.5rem" style={{ marginRight: ".5rem" }} />
                    <span>
                        <h4 className="d-inline"><strong>新增專案</strong></h4>
                    </span>
                </div>
                <div className="card-body row gy-2">
                    <label htmlFor="name" className="col-md-4 col-sm-12">
                        <span><strong>專案名稱</strong></span>
                        <input id="name" className="form-control" />
                    </label>
                    <label htmlFor="date" className="col-md-4 col-sm-12">
                        <span><strong>開發時程</strong></span>
                        <input id="date" className="form-control" />
                    </label>
                    <label htmlFor="pType" className="col-md-4 col-sm-12">
                        <span><strong>專案類型</strong></span>
                        <input id="pType" className="form-control" />
                    </label>
                    {/* <Editor editorState={editorState} onChange={setEditorState} /> */}
                </div>
            </div>
        </div>
    )
}