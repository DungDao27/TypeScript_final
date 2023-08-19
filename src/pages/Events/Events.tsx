import React, { useState, useEffect, useRef } from 'react';
import './Events.css'

export default function Events() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSecond, setTimerSeconds] = useState('00');

    const interval = useRef<NodeJS.Timeout | null>(null); // Specify the type of interval

    const startTimer = () => {
        const countdownDate = new Date('March 1 2022 00:00:00').getTime();

        interval.current = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = `0${Math.floor(distance / (1000 * 60 * 60 * 24))}`.slice(-2);
            const hours = `0${Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))}`.slice(-2);
            const mins = `0${Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)))}`.slice(-2);
            const seconds = `0${Math.floor((distance % (1000 * 60) / 1000))}`.slice(-2);

            if (distance < 0) {
                clearInterval(interval.current!); // Use '!' to assert that interval.current is not null
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(mins);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, []);

    return (
        <>
            <section>
                <div className='sliderEvent'>
                    <div className='timeEvents'>
                        <div className='countDownEvent'>
                            <section className='events'>
                                <p className='dayEvent'>{timerDays}</p>
                                <p><small>Ngày</small></p>
                            </section>
                            <section className='events'>
                                <p className='hoursEvent'>{timerHours}</p>
                                <p><small>giờ</small></p>
                            </section>
                            <section className='events '>
                                <p className='minEvent'>{timerMinutes}</p>
                                <p><small>phút</small></p>
                            </section>
                            <section className='events '>
                                <p className='secondEvent'>{timerSecond}</p>
                                <p><small>giây</small></p>
                            </section>
                        </div>
                        <h4>Sự kiện công nghệ lớn nhất 2021</h4>
                        <h6>20 - 25 tháng 12, 2022, Việt Nam</h6>
                    </div>
                </div>
                <div className='eventDetail'>
                    <div className='row'>
                        <div className="col-md-6 imgEvent">
                            <img className='animate' src="./images/imgSlider/it.png" alt="" />
                        </div>
                        <div className="col-md-6 infoEvent">
                            <h5>Sự kiện công nghệ dành cho startup</h5>
                            <h6>Nơi gặp gỡ của những tư tưởng lớn</h6>
                            <p className='colorCardTitle'>Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)</p>
                            <button className='btnGlobal mr-4 btnJohn'>Tham gia</button>
                            <button className='btnGlobal btnLearn'>Tìm hiểu thêm</button>
                        </div>
                    </div>
                </div>
                <div className='speecher mt-4'>
                    <h6>Các nhà đồng sáng tạo</h6>
                    <div className='row speechDetail'>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor5.jpg" alt="" />
                                <h6>Nguyễn Nhật</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor6.jpg" alt="" />
                                <h6>Nguyễn Nhật Nam</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor7.jpg" alt="" />
                                <h6>Nguyễn Nam</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor8.jpg" alt="" />
                                <h6>Jhonny Đặng</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor9.jpg" alt="" />
                                <h6>Ngô Henry</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor10.jpg" alt="" />
                                <h6>Vương Phạm Vn</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor11.jpg" alt="" />
                                <h6>Rober Imacu</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className='cardSpeecher'>
                                <img src="./images/imgInstrutors/instrutor12.jpg" alt="" />
                                <h6>Khoa Pug</h6>
                                <p>Ceo TechViet Production</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='donors'>
                    <h6>Nhà tài trợ chương trình</h6>
                    <div className='row'>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className='itemDonors'>
                                <img src="./images/imgDonors/meta.jpg" alt="" />
                                <p>Facebook</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className='itemDonors'>
                                <img src="./images/imgDonors/microsoft.jpg" alt="" />
                                <p>Microsoft</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className='itemDonors'>
                                <img src="./images/imgDonors/Google-logo.jpg" alt="" />
                                <p>Google</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <div className='itemDonors'>
                                <img src="./images/imgDonors/amazon.jpg" alt="" />
                                <p>Amazon</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
