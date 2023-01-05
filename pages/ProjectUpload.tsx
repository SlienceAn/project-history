import React, { useRef } from "react"
import {
    BsFillPencilFill,
    BsInfoSquareFill,
    BsCalendar3,
    BsTools,
    BsFillPeopleFill,
    BsQuestionSquareFill,
    BsFillChatDotsFill
} from "react-icons/bs"
import ProjectInput from "../components/ProjectInput"
import Draft from "../components/Draft"
import ImageUpload from "../components/ImageUpload"

export default function ProjectUpload(): JSX.Element {
    const pName = useRef<HTMLInputElement>(null)
    const pDate = useRef<HTMLInputElement>(null)
    const pType = useRef<HTMLInputElement>(null)
    const pCompany = useRef<HTMLInputElement>(null)
    const pTool = useRef<HTMLInputElement>(null)
    const pImage = useRef<any>(null)
    const uploadAll = () => {
        fetch('/api/DataPool', {
            method: "POST",
            body: JSON.stringify({
                name: pName.current?.value,
                date: pDate.current?.value,
                type: pType.current?.value,
                tool: pTool.current?.value,
                company: pCompany.current?.value,
                img: pImage.current?.files,
            })
        })
    }
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
                    <ProjectInput
                        id="name"
                        className="col-md-4 col-sm-12"
                        title="專案名稱"
                        icon={<BsInfoSquareFill />}
                        ref={pName}
                    />
                    <ProjectInput
                        id="date"
                        className="col-md-4 col-sm-12"
                        title="開發時程"
                        icon={<BsCalendar3 />}
                        ref={pDate}
                    />
                    <ProjectInput
                        id="pType"
                        className="col-md-4 col-sm-12"
                        title="專案類型"
                        icon={<BsQuestionSquareFill />}
                        ref={pType}
                    />
                    <ProjectInput
                        id="company"
                        className="col-md-3 col-sm-12"
                        title="專案所屬"
                        icon={<BsFillPeopleFill />}
                        ref={pCompany}
                    />
                    <ProjectInput
                        id="date"
                        className="col-md-9 col-sm-12"
                        title="使用工具"
                        icon={<BsTools />}
                        ref={pTool}
                    />
                    <ProjectInput
                        id="description"
                        className="col-md-12"
                        title="專案描述"
                        icon={<BsFillChatDotsFill />}
                    >
                        <Draft />
                    </ProjectInput>
                    <ImageUpload ref={pImage} />
                    <div className="col-md-12">
                        <button className="btn btn-success w-100" onClick={uploadAll}>
                            <strong>上傳</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}