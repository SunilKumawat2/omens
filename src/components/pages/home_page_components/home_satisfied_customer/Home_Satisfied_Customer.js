import { useState } from 'react';
import Common_Images_Transport from '../../../common/common_imges_transport/Common_Images_Transport';

const Home_Satisfied_Customer = () => {
    const [testimonialActive, setTestimonialActive] = useState(2);
    return (
        <div>
            <section className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp" data-wow-duration="2s">
                <div className="flex flex-wrap justify-between items-center mx-auto min-[1100px]:max-w-[800px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
                        <div className="gi-deal-section w-full">
                            <div className="gi-products">
                                <div className="section-title mb-[20px] relative text-center pb-[20px] z-[5]" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
                                    <div className="section-detail">
                                        <h2 className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-Poppins max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                                            Satsfying Customer
                                        </h2>
                                        <p className="mt-[10px] text-[14px] text-[#777] leading-[18px]">We satisfied more than 700 customers</p>
                                    </div>
                                </div>

                                <div className="gi-deal-block mx-[-12px] bg-gray-100" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                                    <div className="w-full">
                                        <div className="w-full  pb-5">
                                            <div className="relative">
                                                <div className="absolute top-0 left-0 mt-3 ml-4 md:mt-5 md:ml-12">
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.8333 16.6667C10.4617 16.6667 10.105 16.7233 9.75 16.775C9.865 16.3883 9.98333 15.995 10.1733 15.6417C10.3633 15.1283 10.66 14.6833 10.955 14.235C11.2017 13.75 11.6367 13.4217 11.9567 13.0067C12.2917 12.6033 12.7483 12.335 13.11 12C13.465 11.65 13.93 11.475 14.3 11.2283C14.6867 11.0067 15.0233 10.7617 15.3833 10.645C15.73 10.5017 16.0333 10.3783 16.2817 10.275C16.785 10.0667 17.0717 9.94667 17.0717 9.94667L16.2633 6.71667C16.2633 6.71667 15.9 6.80334 15.2683 6.95667C14.95 7.03667 14.5617 7.13001 14.12 7.24167C13.6683 7.32501 13.1867 7.55334 12.65 7.76167C12.12 7.99834 11.5067 8.15834 10.9367 8.53834C10.3633 8.90167 9.70166 9.20501 9.11833 9.69167C8.55333 10.1933 7.87166 10.6283 7.36833 11.2667C6.81833 11.8633 6.275 12.49 5.85333 13.2033C5.365 13.8833 5.03333 14.63 4.68333 15.3683C4.36666 16.1067 4.11166 16.8617 3.90333 17.595C3.50833 19.065 3.33166 20.4617 3.26333 21.6567C3.20666 22.8533 3.24 23.8483 3.31 24.5683C3.335 24.9083 3.38166 25.2383 3.415 25.4667C3.44333 25.6483 3.45666 25.7467 3.45666 25.7467L3.5 25.7367C4.225 29.1233 7.23 31.6667 10.8333 31.6667C14.975 31.6667 18.3333 28.3083 18.3333 24.1667C18.3333 20.025 14.975 16.6667 10.8333 16.6667ZM29.1667 16.6667C28.795 16.6667 28.4383 16.7233 28.0833 16.775C28.1983 16.3883 28.3167 15.995 28.5067 15.6417C28.6967 15.1283 28.9933 14.6833 29.2883 14.235C29.535 13.75 29.97 13.4217 30.29 13.0067C30.625 12.6033 31.0817 12.335 31.4433 12C31.7983 11.65 32.2633 11.475 32.6333 11.2283C33.02 11.0067 33.3567 10.7617 33.7167 10.645C34.0633 10.5017 34.3667 10.3783 34.615 10.275C35.1183 10.0667 35.405 9.94667 35.405 9.94667L34.5967 6.71667C34.5967 6.71667 34.2333 6.80334 33.6017 6.95667C33.2833 7.03667 32.895 7.13001 32.4533 7.24167C32.0017 7.32501 31.52 7.55334 30.9833 7.76167C30.455 8.00001 29.84 8.15834 29.27 8.54001C28.6967 8.90334 28.035 9.20667 27.4517 9.69334C26.8867 10.195 26.205 10.63 25.7017 11.2667C25.1517 11.8633 24.6083 12.49 24.1867 13.2033C23.6983 13.8833 23.3667 14.63 23.0167 15.3683C22.7 16.1067 22.445 16.8617 22.2367 17.595C21.8417 19.065 21.665 20.4617 21.5967 21.6567C21.54 22.8533 21.5733 23.8483 21.6433 24.5683C21.6683 24.9083 21.715 25.2383 21.7483 25.4667C21.7767 25.6483 21.7899 25.7467 21.7899 25.7467L21.8333 25.7367C22.5583 29.1233 25.5633 31.6667 29.1667 31.6667C33.3083 31.6667 36.6667 28.3083 36.6667 24.1667C36.6667 20.025 33.3083 16.6667 29.1667 16.6667Z" fill="#72BB53" />
                                                    </svg>
                                                </div>
                                                <div className="relative">
                                                    <div className="flex justify-between w-full py-[15px] px-[18px] bg-gray-100">
                                                        {/* Testimonial section */}
                                                        <div>
                                                            {testimonialActive === 1 && (
                                                                <div>
                                                                    <div
                                                                        class="gi-pro-content h-full p-[40px] pb-0 relative z-[10] flex flex-col text-center">
                                                                        <div class="gi-pro-rat-price p-5 mt-[5px] mb-[0] flex flex-col">
                                                                            <p class="text-[16px] text-[#4C5159] font-medium">Lorem
                                                                                Ipsum is simply dummy text of the printing and
                                                                                typesetting
                                                                                industry. Lorem Ipsum has been the industry's standard
                                                                                dummy text
                                                                                ever since the 1500s, when an unknown printer took a
                                                                                galley of type
                                                                                and scrambled it to make</p>

                                                                            <div
                                                                                class="gi-pro-rat-price mt-4 flex d-flex justify-center gap-2 items-center">
                                                                                <span class="gi-pro-rating opacity-[0.7] relative">
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                </span>

                                                                            </div>

                                                                        </div>
                                                                        <div class="text-center">
                                                                            <h2
                                                                                class="text-sm md:text-base text-base font-bold text-gray-700 leading-tight">
                                                                                John Doe</h2>
                                                                            <small
                                                                                class="text-gray-500 text-xs md:text-sm truncate">CEO,
                                                                                ABC Inc.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {testimonialActive === 2 && (
                                                                <div>
                                                                    <div
                                                                        class="gi-pro-content h-full p-[40px] pb-0 relative z-[10] flex flex-col text-center">
                                                                        <div class="gi-pro-rat-price p-5 mt-[5px] mb-[0] flex flex-col">
                                                                            <p class="text-[16px] text-[#4C5159] font-medium">Lorem
                                                                                Ipsum2 is simply dummy text of the printing and
                                                                                typesetting
                                                                                industry. Lorem Ipsum has been the industry's standard
                                                                                dummy text
                                                                                ever since the 1500s, when an unknown printer took a
                                                                                galley of type
                                                                                and scrambled it to make</p>

                                                                            <div
                                                                                class="gi-pro-rat-price mt-4 flex d-flex justify-center gap-2 items-center">
                                                                                <span class="gi-pro-rating opacity-[0.7] relative">
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                </span>

                                                                            </div>

                                                                        </div>
                                                                        <div class="text-center">
                                                                            <h2
                                                                                class="text-sm md:text-base text-base font-bold text-gray-700 leading-tight">
                                                                                John Doe</h2>
                                                                            <small
                                                                                class="text-gray-500 text-xs md:text-sm truncate">CEO,
                                                                                ABC Inc.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {testimonialActive === 3 && (
                                                                <div>
                                                                    <div
                                                                        class="gi-pro-content h-full p-[40px] pb-0 relative z-[10] flex flex-col text-center">
                                                                        <div class="gi-pro-rat-price p-5 mt-[5px] mb-[0] flex flex-col">
                                                                            <p class="text-[16px] text-[#4C5159] font-medium">Lorem
                                                                                Ipsum3 is simply dummy text of the printing and
                                                                                typesetting
                                                                                industry. Lorem Ipsum has been the industry's standard
                                                                                dummy text
                                                                                ever since the 1500s, when an unknown printer took a
                                                                                galley of type
                                                                                and scrambled it to make</p>

                                                                            <div
                                                                                class="gi-pro-rat-price mt-4 flex d-flex justify-center gap-2 items-center">
                                                                                <span class="gi-pro-rating opacity-[0.7] relative">
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star fill text-[16px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                    <i
                                                                                        class="gicon gi-star text-[16px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                                                                                </span>

                                                                            </div>

                                                                        </div>
                                                                        <div class="text-center">
                                                                            <h2
                                                                                class="text-sm md:text-base text-base font-bold text-gray-700 leading-tight">
                                                                                John Doe</h2>
                                                                            <small
                                                                                class="text-gray-500 text-xs md:text-sm truncate">CEO,
                                                                                ABC Inc.</small>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex my-4 justify-center items-center p-3">
                                    <button
                                        onClick={() => setTestimonialActive(1)} // Set active testimonial to 1
                                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 1
                                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                                            }`}
                                    >
                                        <img src={Common_Images_Transport?.user1} className="rounded-full" alt="Testimonial 1" />
                                    </button>

                                    {/* Button for Testimonial 2 */}
                                    <button
                                        onClick={() => setTestimonialActive(2)} // Set active testimonial to 2
                                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 2
                                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                                            }`}
                                    >
                                        <img src={Common_Images_Transport?.user1} className="rounded-full" alt="Testimonial 2" />
                                    </button>

                                    {/* Button for Testimonial 3 */}
                                    <button
                                        onClick={() => setTestimonialActive(3)} // Set active testimonial to 3
                                        className={`text-center font-bold shadow-xs focus:outline-none focus:shadow-outline inline-block rounded-full mx-2 ${testimonialActive !== 3
                                                ? 'h-12 w-12 opacity-25 bg-indigo-300 text-gray-600'
                                                : 'h-16 w-16 opacity-100 bg-indigo-600 text-white'
                                            }`}
                                    >
                                        <img src={Common_Images_Transport?.user1} className="rounded-full" alt="Testimonial 3" />
                                    </button>
                                </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home_Satisfied_Customer