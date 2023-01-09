import Image from 'next/image';
import { BsBasket, BsWater, BsXSquare } from 'react-icons/bs'
const WorkList = () => {
    return (
        <div className='main'>
            <div className='work'>
                <div className='work-content'>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="1">
                            <span className="company-name">捷思環能股份有限公司</span>
                            <h4 className="year">2019.08 ~ 至今</h4>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce non lectus justo. Nam ultricies laoreet massa sed
                                maximus. Curabitur tristique sagittis scelerisque. Vivamus
                                posuere nisi quis tortor interdum, in finibus risus
                                convallis.
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <Image src="/" alt='missing' width="100" height="100" />
                            </div>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="2">
                            <span className="company-name">踰翔數位科技有限公司</span>
                            <h4 className="year">2018.09 ~ 2019.07</h4>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce non lectus justo. Nam ultricies laoreet massa sed
                                maximus. Curabitur tristique sagittis scelerisque. Vivamus
                                posuere nisi quis tortor interdum, in finibus risus
                                convallis.
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <div><BsXSquare /></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-content">
                        <div className="content col-md-8 col-sm-8" data-index="3">
                            <span className="company-name">摯陞數位科技有限公司</span>
                            <h4 className="year">2018.04 ~ 2018.07</h4>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce non lectus justo. Nam ultricies laoreet massa sed
                                maximus. Curabitur tristique sagittis scelerisque. Vivamus
                                posuere nisi quis tortor interdum, in finibus risus
                                convallis.
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="circle">
                                <div><BsXSquare /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkList;