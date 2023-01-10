import Image from 'next/image';
import { AiOutlineMail, AiOutlineGithub, AiFillPhone, AiFillHtml5, AiFillTool, AiFillDatabase } from 'react-icons/ai'
import { BiMap, BiLibrary } from 'react-icons/bi';
import { SiGitbook, SiJavascript, SiNodedotjs } from 'react-icons/si'
const Profile = () => {
    return (
        <div className="h-100 profile">
            <div className="profile-header py-3 mb-3">
                <div className="img mb-3"></div>
                <span><strong>劉庭安，捷思環能-前端工程師</strong></span>
            </div>
            <div className="profile-body mb-3">
                <h4>個人資訊</h4>
                <ul className="info">
                    <li>
                        <SiGitbook fontSize="2rem" />
                        <span><strong>正修科大-數位多媒體設計系學士畢業</strong> </span>
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
                <h4>專長</h4>
                <div className="skill d-flex row py-2">
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <AiFillHtml5 fontSize="1.3rem" /> 網頁前端
                        </div>
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
                        <div className='d-flex align-items-center gap-2'>
                            <SiJavascript fontSize="1.3rem" /> 前端框架
                        </div>
                        <ul>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>Vue2、Vue3</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <BiLibrary fontSize="1.3rem" /> 第三方套件
                        </div>
                        <ul>
                            <li>Axios、Ajax</li>
                            <li>Redux、Redux Toolkit</li>
                            <li>Vuex</li>
                            <li>HighChart.js</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <SiNodedotjs fontSize="1.3rem" /> 網頁後端
                        </div>
                        <ul>
                            <li>Node.js</li>
                            <li>Next.js</li>
                            <li>Express.js</li>
                            <li>RESTFul API</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <AiFillTool fontSize="1.3rem" /> 開發工具
                        </div>
                        <ul>
                            <li>NVM、NPM</li>
                            <li>Webpack</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className='skill-content col-md-6'>
                        <div className='d-flex align-items-center gap-2'>
                            <AiFillDatabase fontSize="1.3rem" /> 資料庫
                        </div>
                        <ul>
                            <li>SQL Server</li>
                            <li>SQL CRUD</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="profile-footer">
                <div className='bg-white rounded-3'>
                    <Image className='rounded-3' src="/profile_bg.jpg" alt='' width='100' height='100' />
                </div>
                <div className='bg-white rounded-3'>
                    <Image className='rounded-3' src="/profile_bg.jpg" alt='' width='100' height='100' />
                </div>
                <div className='bg-white rounded-3'>
                    <Image className='rounded-3' src="/profile_bg.jpg" alt='' width='100' height='100' />
                </div>
                <div className='bg-white rounded-3'>
                    <Image className='rounded-3' src="/profile_bg.jpg" alt='' width='100' height='100' />
                </div>
            </div>
        </div>
    );
};
export default Profile;