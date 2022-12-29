import Link from "next/link"
import { BsHouseFill, BsFileCodeFill } from "react-icons/bs"
export default function NavBar(): JSX.Element {
    return (
        <nav className="navbar navbar-light bg-dark text-white">
            <div className="container">
                <h4>Ting An,Liu</h4>
                <ol className="link-group breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            <BsHouseFill fontSize="1.3rem"/>
                            <span>經歷</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/ProjectGallery">
                            <BsFileCodeFill fontSize="1.3rem"/>
                            <span>專案作品</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item"><Link href="/ProjectUpload">新增專案</Link></li>
                </ol>
            </div>
        </nav>
    )
}