import React from "react";
export default function InforitemContent() {
  return (
    <div>
      <div className="overflow-y-hidden container shadow-xl shadow-blue-50">
        <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
          <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
            {/* <Fade duration={2000} triggerOnce direction="left"> */}
            <div className>
              <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
                Tại sao lại chọn C-learning
              </p>
              <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
                Elearning sẽ định hướng và đưa ra các lộ trình học lập trình
                nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có
                việc ngay sau học.
              </p>
              <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
                <img
                  src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                  alt="ongoing meeting"
                  className="w-full obejct-fit object-center object-fill h-full"
                />
              </div>
              <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg1.svg"
                        alt="clock"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Nền tảng lập trình
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Elearning cung cấp những nền tảng, giá trị tư duy cốt lõi
                      nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của
                      công nghệ và môi trường làm việc.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg2.svg"
                        alt="Friendly"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Mentor tận tâm
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày
                      đầu tiên. Đóng vai trò một thành viên trong qui trình
                      Scrum, Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg3.svg"
                        alt="Creative"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Công nghệ mới
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Bạn được học và trải nghiệm các công nghệ lập trình mới
                      nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ
                      doanh nghiệp.
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 relative">
                    <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                      <img
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_6_Svg4.svg"
                        alt="Achievments"
                      />
                    </div>
                  </div>
                  <div className="flex items-start flex-col ml-6 pt-8">
                    <h2 className="text-lg font-semibold leading-4 text-gray-800">
                      Dự án thực tế
                    </h2>
                    <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                      Đội ngũ Giảng viên và các Mentor là những người dày dạn
                      kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ
                      truyền đạt những kinh nghiệm "máu lửa" cho bạn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
              <img
                src="https://i.ibb.co/SKLJ7WX/austin-distel-jp-Hw8ndw-J-Q-unsplash-1.png"
                alt="ongoing meeting"
                className="w-full obejct-fit object-center object-fill h-full"
              />
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </div>
  );
}
