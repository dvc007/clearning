import React from "react";

export default function About() {
  return (
    <div className="h-full w-full px-10 ">
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
            Về C-Learning
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Chúng tôi có hàng loạt những giá trị để chứng minh với bạn về năng
            lực vượt trội của chúng tôi để bạn ra quyết định ngay. Lý do tại sao
            chọn chúng tôi cho sự nghiệp của bạn. ĐẦU TIÊN, CHÚNG TÔI LÀ AI ?
            Chúng tôi xuất thân là những sinh viên xuất sắc top 10 ngành CNTT
            năm 2007 trường Đại Học Khoa Học Tự Nhiên HCM - ĐH Quốc Gia HCM.
            Trước khi bắt đầu xây dựng học viện C-Learning này, chúng tôi là
            những nhà phát triển phần mềm và những huấn luyện viên với hơn 10
            năm kinh nghiệm. Chúng tôi bắt đầu làm việc ngay khi ra trường tại
            các tập đoàn gia công phần mềm lớn như Thụy Sỹ, Pháp, Anh,…Chúng tôi
            từng tham gia là một kiến trúc sư phần mềm cho công ty Anh văn Hội
            Việt Mỹ, cũng như đưa ý tưởng giải pháp và triển khai toàn bộ hệ
            thống giao dịch Sàn chứng khoán HCM, HoSE, tư vấn hệ thống CRM, ERP
            cho ô tô Trường Hải.
          </p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img
            className="lg:block hidden w-full"
            src={require("./img/image1.png")}
            alt="Group of people Chilling"
          />
          <img
            className="lg:hidden sm:block hidden w-full"
            src="https://i.ibb.co/5sZTmHq/Rectangle-116.png"
            alt="Group of people Chilling"
          />
          <img
            className="sm:hidden block w-full"
            src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png"
            alt="Group of people Chilling"
          />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">
              Tại C-Learning Academy, chúng tôi cam kết mang lại những giá trị
              thực tế và tất cả những gì làm nên một lập trình chuyên nghiệp, tư
              duy toàn cầu như vậy. Đội ngũ của chúng tôi, vừa là những người
              lập trình viên, vừa làm quản lý, cũng là giám đốc cũng vừa là
              giảng viên các trường ĐH, CĐ tại HCM.
            </p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">
              Chúng tôi cũng được chọn vào các chương trình huấn luyện kỹ năng
              đào tạo nghề tại đại học ARIZONA - ASU - MỸ do tập đoàn INTEL và
              chính phủ Mỹ tài trợ. Tất cả những kỹ năng, phương pháp giảng dạy
              tại các khóa huấn luyện này đều được chúng tôi áp dụng vào các
              khóa học đào tạo nghề thực tế tại C-Learning Academy. Xem thông
              các dự án của công ty chúng tôi tại CyberBiz
            </p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img
              className="lg:block hidden w-full"
              src={require("./img/image2.png")}
              alt="people discussing on board"
            />
            <img
              className="lg:hidden sm:block hidden w-full h-3/4"
              src="https://i.ibb.co/ZLgK3NQ/Group-788.png"
              alt="people discussing on board"
            />
            <img
              className="sm:hidden block w-full"
              src="https://i.ibb.co/9g2R7Xr/Group-803.png"
              alt="people discussing on board"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
