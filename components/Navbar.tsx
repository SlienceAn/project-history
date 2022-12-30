import Link from "next/link"
import { BsPalette2, BsAwardFill } from "react-icons/bs"
export default function NavBar(): JSX.Element {
    return (
        <nav className="navbar navbar-light bg-dark text-white  ">
            <div className="container p-2">
                <h4>Ting An,Liu</h4>
                <ol className="link-group breadcrumb m-0">
                    <li className="breadcrumb-item">
                        <Link href="/">
                            <BsAwardFill fontSize="1.3rem" />
                            <span>個人簡介</span>
                        </Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/ProjectGallery">
                            <BsPalette2 fontSize="1.3rem" />
                            <span>專案作品</span>
                        </Link>
                    </li>
                    {/* <li className="breadcrumb-item"><Link href="/ProjectUpload">新增專案</Link></li> */}
                </ol>
            </div>
        </nav>
    )
}