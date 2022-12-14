import TextContent from "../components/TextContent";
export default function ProjectContent() {
    return (
        <div className="row m-0 gy-2">
            <div className="col-md-8"></div>
            <div className="col-md-4">
                <div className="card-box">
                    <div className="card">
                        <div className="card-header">Card Header</div>
                        <div className="card-body p-0">
                            <TextContent />
                        </div>
                        <div className="card-footer">Card footer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

