import React from "react";
export default function EventLandingPage() {
  return (
    <div className="content-around w-full h-full">
      <div
        className="bg-cover bg-center shadow-xl shadow-blue-50"
        style={{
          backgroundImage: `url(https://community.thriveglobal.com/wp-content/uploads/2018/01/techandsuccess.jpg)`,
        }}
      >
        <div className="bg-black bg-opacity-75 py-16 px-4 text-center">
          <h1 className="text-white text-4xl font-medium mb-4">C-Learning</h1>
          <p className="text-white text-3xl mb-8">
            Lớp học toàn cầu cho một thời đại toàn cầu
          </p>
        </div>
      </div>

      <div className="mx-16 shadow-xl shadow-black-200/50">
        <div className="flex items-center text-center justify-center my-4">
          <figure className="max-w-6xl">
            <img
              className="h-max max-w-full rounded-lg"
              src={require("./img/baner.jpg")}
              alt="something"
            />
            <figcaption className="mt-2 sm:text-sm md:text-xs xl:text-xl lg:text-lg  text-center text-gray-500 dark:text-gray-400">
              NỘI DUNG WORKSHOP
            </figcaption>
          </figure>
        </div>

        <div className="shadow-xl shadow-blue-50 ">
          <div
            id="accordion-color"
            data-accordion="collapse"
            data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
          >
            <h2 id="accordion-color-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-color-body-1"
                aria-expanded="true"
                aria-controls="accordion-color-body-1"
              >
                <span>
                  PHẦN 1: BỨC TRANH TOÀN CẢNH NGÀNH CNTT TẠI VIỆT NAM{" "}
                </span>
                <svg
                  data-accordion-icon
                  className="w-12 h-12 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-1"
              className="hidden"
              aria-labelledby="accordion-color-heading-1"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  - CNTT là lĩnh vực phát triển mạnh mẽ trên toàn thế giới, với
                  các lĩnh vực khác Việt Nam đi sau thế giới 10-20 năm nhưng
                  CNTT là lĩnh vực đi chỉ cách thế giới 1-2 năm. Vậy đâu là tiêm
                  năng thật sự, điểm mạnh của CNTT Việt Nam?. Các diễn giả sẽ
                  giải thích và dự đoán xu hướng ngành CNTT tại Việt Nam, bố mẹ
                  sẽ có cái nhìn từ tổng quan đến chi tiết, cơ hội đến thách
                  thức, từ đó hướng con vào nơi có nhiều cơ hội và phát triển
                  bền vững trong tương lai.
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-color-body-2"
                aria-expanded="false"
                aria-controls="accordion-color-body-2"
              >
                <span>
                  PHẦN 2: TỔNG QUAN GIÁO DỤC CNTT TẠI VIỆT NAM NHƯ THẾ NÀO?
                </span>
                <svg
                  data-accordion-icon
                  className="w-12 h-12 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-2"
              className="hidden"
              aria-labelledby="accordion-color-heading-2"
            >
              <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  - Trong phần này, các chuyên gia giáo dục sẽ giúp bố mẹ nhìn
                  thực tế vào xu hướng học CNTT tại Việt Nam?. Hiện tại Việt Nam
                  đang đào tạo bao nhiêu ngành? Ngành nào là ngành tiềm năng và
                  ngành nào là ngành khó khăn?. Các khoa, ngành, kiến thức giảng
                  dạy, yêu cầu đầu vào, học phí, môi trường học... . Cơ hội làm
                  tại Việt Nam sau khi tốt nghiệp là như thế nào? Công ty nào
                  xứng đáng để đầu quân?. Cơ hội đi nước ngoài/ làm việc
                  remote...
                </p>
              </div>
            </div>
            <h2 id="accordion-color-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-color-body-3"
                aria-expanded="false"
                aria-controls="accordion-color-body-3"
              >
                <span>
                  PHẦN 3: BÍ KÍP CHỌN TRƯỜNG, CHỌN NGÀNH TRONG LĨNH VỰC CNTT TẠI
                  VIỆT NAM CHO CON
                </span>
                <svg
                  data-accordion-icon
                  className="w-12 h-12 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-color-body-3"
              className="hidden"
              aria-labelledby="accordion-color-heading-3"
            >
              <div className="p-5 font-light border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  - Với con học tốt, có đam mê, định hướng vào trường nào? Ngành
                  nào?. Con học lực bình thường, không có nhiều giải thưởng thì
                  học ở đâu để có nhiều cơ hội?. Con có thế mạnh về logic, kỹ
                  thuật (CNTT, Data...). Con có thế mạnh về kinh tế, nghệ
                  thuật... (BA, Multi...). Con chưa có định hướng. Tài chính gia
                  đình mạnh. Gia đình tài chính bình thường. Liệu có phải học
                  trường top mới có tương lai tốt? Cần chuẩn bị những gì để có
                  định hướng, vào được trường ĐH mơ ước và theo đuổi ngành nghề
                  yêu thích. Để trở thành người xuất sắc vượt trội sau này con
                  cần được định hướng và nuôi dưỡng đam mê từ sớm.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5 mb-4 shadow-xl shadow-blue-50">
          <a
            href="/#"
            className="flex flex-col  items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={require("./img/sizetex.webp")}
              alt="sa"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Công nghệ thông tin là nghề nghiệp phát triển mạnh mẽ trên toàn
                thế giới và Việt Nam. Số người lao động thuộc ngành Công nghệ
                thông tin là 1.030.000 người, chiếm 1,88% tổng số lao động tại
                Việt Nam. So với năm 2000 thì con số này đã tăng gấp 20 lần.
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                CNTT là nghề đang được nhiều bố mẹ định hướng cho con theo đuổi
                ngay từ những năm cấp 2, cấp 3. Tuy nhiên, tiềm năng là vậy
                nhưng đa số ba mẹ và các bạn học sinh chưa thật sự hiểu về con
                đường này, từ việc bắt đầu ra sao, chuyện chọn trường phù hợp
                với con như thế nào? Đặc biệt là tại môi trường Việt Nam.
              </p>
            </div>
          </a>
        </div>

        <div className="shadow-xl shadow-blue-50">
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <div class="flex space-x-4  items-center text-center align-center justify-center">
                  <svg
                    className="w-12 h-12 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-sm md:text-xs xl:text-xl lg:text-lg">
                  Nghề CNTT Việt Nam có thật sự tiềm năng như lờ "đồn" ?
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <div class="flex space-x-4  items-center text-center align-center justify-center">
                  <svg
                    className="w-12 h-12 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-sm md:text-xs xl:text-xl lg:text-lg">
                  Nghề CNTT có nhiều ngành nhỏ, đâu là mỏ vàng để cn tập trung
                  sự nghiệp
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <div class="flex space-x-4  items-center text-center align-center justify-center">
                  <svg
                    className="w-12 h-12 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-sm md:text-xs xl:text-xl lg:text-lg">
                  Trường nào tại Việt Nam đào taoh về cong nghệ chất lượng ?
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    aria-hidden="true"
                    className="w-3 h-3 text-blue-800 dark:text-blue-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <div class="flex space-x-4  items-center text-center align-center justify-center">
                  <svg
                    className="w-12 h-12 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-sm md:text-xs xl:text-xl lg:text-lg">
                  Tính cách của con thì nên học ngành nào của CNTT
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}