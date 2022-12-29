import Link from "next/link";
import { BsArrowRightCircleFill } from 'react-icons/bs'

type props = {
    idx: number
}
const ProjectCard = ({ idx }: props): JSX.Element => {
    return (
        <div className="project-card" style={{ backgroundImage: `url(https://picsum.photos/1000/800?random=${idx})` }}>
            <div className="project-card-content">
                <h2 className="text-center"><strong>Project Name</strong></h2>
                <ul>
                    <li>test</li>
                    <li>test</li>
                </ul>
                <Link href="/" className="d-block text-center mt-2">
                    <button className="btn btn-success d-inline-flex gap-2 align-items-center">
                        <strong>查看專案</strong>
                        <BsArrowRightCircleFill fontSize="1.2rem" />
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default function ProjectGallery() {
    const arr = new Array(10).fill(1)
    return (
        <div className="container overflow-hidden">
            <div className="row g-4">
                {arr.map((el, idx) =>
                    <div key={idx} className="col-md-6 col-sm-12">
                        <ProjectCard idx={idx} />
                    </div>)}
            </div>
        </div>
    );
};
