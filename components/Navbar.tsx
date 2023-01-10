import Link from "next/link"
import { BsPalette2, BsAwardFill, BsFillPencilFill } from "react-icons/bs"
export default function NavBar(): JSX.Element {
    return (
        <div className="link-box">
            <Link href="/">
                <div><BsAwardFill fontSize="2rem" /></div>
                <span>個人簡介</span>
            </Link>
            <Link href="/ProjectGallery">
                <div><BsPalette2 fontSize="2rem" /></div>
                <span>專案作品</span>
            </Link>
            <Link href="/ProjectUpload">
                <div><BsFillPencilFill fontSize="2rem" /></div>
                <span>新增專案</span>
            </Link>
        </div>
    )
}