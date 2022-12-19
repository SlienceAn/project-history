import { useState } from 'react'
import TextContent from "../components/TextContent";

export default function ProjectContent() {
    const [isContent, setContent] = useState(false)
    return (
        <div className="row m-0 gy-2">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <div className="card-box">
                    <div className="card">
                        <div className="card-header">
                            <button className="btn btn-success" onClick={() => setContent(!isContent)}>{isContent ? "專案說明" : "使用技術"}</button>
                        </div>
                        <div className="card-body p-0">
                            <TextContent content={isContent} />
                        </div>
                        <div className="card-footer">Card footer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

