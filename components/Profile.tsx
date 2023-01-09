import { AiOutlineMail, AiOutlineGithub, AiFillPhone } from 'react-icons/ai'
import { BiMap } from 'react-icons/bi';
import { BsAlarm } from 'react-icons/bs';
import { SiGitbook } from 'react-icons/si'
const Profile = () => {
    return (
        <div className="h-100 profile">
            <div className="profile-header py-3 mb-3">
                <div className="img mb-3"></div>
                <span><strong>寧做王八蛋，不做窮光蛋</strong></span>
            </div>
            <div className="profile-body mb-3">
                <h4>Information</h4>
                <ul className="info">
                    <li>
                        <SiGitbook fontSize="2rem" />
                        <span><strong>正修科大-數位多媒體設計系</strong> </span>
                    </li>
                    <li>
                        <AiOutlineMail fontSize="2rem" />
                        <span><strong>beast964089@gmail.com</strong> </span>
                    </li>
                    <li>
                        <AiFillPhone fontSize="2rem" />
                        <span><strong>0975-552-937</strong></span>
                    </li>
                    <li>
                        <BiMap fontSize="2rem" />
                        <span><strong>高雄市苓雅區英義街285巷9號</strong></span>
                    </li>
                    <li>
                        <AiOutlineGithub fontSize="2rem" />
                        <span><strong>https://github.com/SlienceAn</strong></span>
                    </li>
                </ul>
                <h4>Skill</h4>
                <div className="skill d-flex row py-2">
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <BsAlarm fontSize="1.3rem"/> 網頁前端</div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS、CSS3</li>
                            <li>SASS、SCSS</li>
                            <li>JavaScript(ES6)、JQuery</li>
                            <li>TypeScript</li>
                            <li>SPA網頁、RWD</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div>前端框架</div>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Vue2 / Vue3</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div>第三方套件</div>
                        <ul>
                            <li>Axios</li>
                            <li>Redux、Redux Toolkit</li>
                            <li>Vuex</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div>網頁後端</div>
                        <ul>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>Express.js</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div>工具</div>
                        <ul>
                            <li>NVM、NPM</li>
                            <li>Webpack</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div>資料庫</div>
                        <ul>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="profile-footer"></div>
        </div>
    );
};
export default Profile;