import useSWR from "swr"
export default function ProjectGallery() {
    const arr = new Array(15).fill(1)
    return (
        <div className="container overflow-hidden">
            <div className="row g-4">
                {arr.map(el =>
                    <div className="col-md-6 col-sm-12">
                        <div className="project-card">
                            <div className="project-card-content">
                                Text
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    );
};
