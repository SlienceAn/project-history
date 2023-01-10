import Image from 'next/image';
const WorkList = () => {
    return (
        <div className='main'>
            <div className='work'>
                <div className='work-content'>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="1">
                            <span className="company-name">捷思環能股份有限公司</span>
                            <h4 className="year">前端工程師，2019.08 ~ 至今</h4>
                            <article className="description">
                                <span><strong>職務內容</strong></span>
                                <ol className='job'>
                                    <li></li>
                                    <li></li>
                                </ol>
                                <span><strong>參與專案</strong></span>
                                <ul className='project'>
                                    <li>CEMS空氣品質監測網</li>
                                    <li>IOT Central微感測器中心系統</li>
                                    <li>Juno數據中心系統整合</li>
                                    <li>勞安作業環境監測中心系統</li>
                                    <li>雲林AQI看板網頁</li>
                                    <li>南科資訊網頁民眾版</li>
                                    <li>高雄市微感測器資訊網</li>
                                </ul>
                            </article>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <Image className='border rounded-circle' src="/A.png" alt='missing' width="100" height="100" />
                            </div>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="2">
                            <span className="company-name">踰翔數位科技有限公司</span>
                            <h4 className="year">網頁工程師，2018.09 ~ 2019.07</h4>
                            <article className="description">
                                <span><strong>職務內容</strong></span>
                                <ol className='job'>
                                    <li></li>
                                    <li></li>
                                </ol>
                                <span><strong>參與專案</strong></span>
                                <ul className='project'>
                                    <li>榮總鋼瓶氣筒系統</li>
                                    <li>MID大進擊後台系統</li>
                                    <li>霍恩實業有限公司前後台網站</li>
                                </ul>
                            </article>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <Image className='border rounded-circle' src="/B.png" alt='missing' width="100" height="100" />
                            </div>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="3">
                            <span className="company-name">摯陞數位科技有限公司</span>
                            <h4 className="year">助理工程師，2018.04 ~ 2018.07</h4>
                            <article className="description">
                                <span><strong>職務內容</strong></span>
                                <ol className='job'>
                                    <li></li>
                                    <li></li>
                                </ol>
                                <span><strong>維護專案</strong></span>
                                <ul className='project'>
                                    <li>流浪狗協會官方網站</li>
                                    <li>普普的風餐廳POS系統</li>    
                                </ul>
                            </article>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <Image className='border rounded-circle' src="/c.png" alt='missing' width="100" height="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;