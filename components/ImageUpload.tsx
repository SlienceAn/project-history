import { useState } from "react"
import { BsImageFill, BsUpload } from "react-icons/bs"
type Url = {
    url: string
}
const Preview = ({ url }: Url): JSX.Element => {
    return (
        <div className="col-md-4">
            <img className="w-100" src={url} alt="missing" />
        </div>
    )
}
export default function ImageUpload(): JSX.Element {
    const [files, setFiles] = useState([])
    const [objectURL, setObjectURL] = useState<string[]>([])
    const [isPreview, setPreview] = useState<boolean>(false)
    const uploadEvent = (event: any) => {
        const filesList = event.target.files
        setFiles(Object.values(filesList))
        setObjectURL(Object.values(filesList).map((el: any) => URL.createObjectURL(el)))
        setPreview(true)
    }
    return (
        <div>
            <label htmlFor="upload" className="w-100">
                <span className='d-inline-flex gap-1 align-items-center'>
                    <BsImageFill />
                    <strong>照片上傳</strong>
                </span>
                <div className="upload-box">
                    <BsUpload fontSize="2rem" />
                    <strong>點此上傳多張照片</strong>
                </div>
                <input id="upload" type="file" name="file" multiple className="d-none" onChange={uploadEvent} />
            </label>
            {objectURL.map(el => <Preview url={el} />)}
        </div>
    )
}