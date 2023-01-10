import { useState, forwardRef, useImperativeHandle } from "react"
import { BsImageFill, BsUpload } from "react-icons/bs"
type Url = {
    url: string
}
const Preview = ({ url }: Url): JSX.Element => {
    return (
        <div className="col-md-4 col-sm-12" style={{ border: '1px solid #ced4da' }}>
            <img className="w-100" src={url} alt="missing" />
        </div>
    )
}
const ImageUpload = forwardRef((props, ref) => {
    const [files, setFiles] = useState<string[]>([])
    const [isPreview, setPreview] = useState<boolean>(false)
    const uploadEvent = (event: any) => {
        const filesList = event.target.files
        const arr: string[] = []
        Object.values(filesList).map((el: any) => arr.push(URL.createObjectURL(el)))
        setFiles([...arr])
        setPreview(true)
    }
    useImperativeHandle(ref, () => ({
        files
    }))
    return (
        <div>
            {!isPreview ?
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
                </label> :
                <>
                    <button className="btn btn-danger mb-2" onClick={() => setPreview(false)}>取消照片</button>
                    <div className="row m-0 p-0 gy-2">
                        {files.map(el => <Preview key={el} url={el} />)}
                    </div>
                </>}
        </div>
    )
})
ImageUpload.displayName = "ImageUpload"
export default ImageUpload;