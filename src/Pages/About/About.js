import React from "react";

export default function About() {
  return (
    <div className="h-full w-full px-10 ">
      <div className="grid grid-cols-2 ">
        <div>
          <h3>Về C-Learning</h3>
          <p>
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
            cho ô tô Trường Hải. Từng Startup và từng thất bại với một ý tưởng
            cực kì hay nhưng vẫn đóng cửa công ty. Tất cả những điều đó đã giúp
            chúng tôi có được nhiều trải nghiệm và nhiều bài học tuyệt vời để
            lấy nguồn cảm hứng truyền đạt cho các bạn trong các khóa học. Chúng
            tôi biết điểm mạnh điểm yếu, điều gì làm nên thành công của một
            người lập trình, điều gì làm nên thành công của một sản phẩm phần
            mềm. Thêm nữa, chúng tôi cũng đã gặp rất nhiều công ty và họ đã nhờ
            chúng tôi tuyển dụng các lập trình, lập trình Front End, Lập trình
            web, lập trình Mobile, ... cho họ. Họ rất khó khăn để tìm người lành
            nghề, không những vậy, họ cần thêm những yếu tố mind-set lúc làm
            việc, tuy duy giải quyết vấn đề, tư duy sáng tạo, làm việc nhóm, tư
            tưởng làm việc trong môi trường toàn cầu. Tại C-Learning Academy,
            chúng tôi cam kết mang lại những giá trị thực tế và tất cả những gì
            làm nên một lập trình chuyên nghiệp, tư duy toàn cầu như vậy. Đội
            ngũ của chúng tôi, vừa là những người lập trình viên, vừa làm quản
            lý, cũng là giám đốc cũng vừa là giảng viên các trường ĐH, CĐ tại
            HCM. Chúng tôi cũng được chọn vào các chương trình huấn luyện kỹ
            năng đào tạo nghề tại đại học ARIZONA - ASU - MỸ do tập đoàn INTEL
            và chính phủ Mỹ tài trợ. Tất cả những kỹ năng, phương pháp giảng dạy
            tại các khóa huấn luyện này đều được chúng tôi áp dụng vào các khóa
            học đào tạo nghề thực tế tại C-Learning Academy. Xem thông các dự án
            của công ty chúng tôi tại CyberBiz
          </p>
        </div>

        <div>
          <img
            className="rounded w-96 h-96 mx-auto"
            src={require("./img/avata.jpeg")}
            alt="Extra large avatar"
          />
          <div className="text-center">
            <h4>MR ĐÀO VĂN CHÂU</h4>
            <h4>GIÁM ĐỐC ĐỀU HÀNH</h4>
          </div>
          <div>
            <p>
              * Học bổng chương trình HEEAP- INTEL về đào tạo kỹ năng dạy nghề
              chuyên sâu tại ĐH Arizona (ASU) Mỹ - 2017
            </p>
            <p>
              * Thạc sỹ Khoa học máy tính - ĐH KH Tự Nhiên - ĐH Quốc Gia HCM
            </p>
            <p>* Top 10 Sinh viên xuất sắc hạng ưu ngành CNTT - ĐH KHTN 2007</p>
            <p>* Giải 3 Nhân Tài Đất Việt - Báo Dân trí tổ chức năm 2007</p>
            <p>* Giải thưởng sáng tạo Game - VNG năm 2007</p>
            <p>
              * Bằng khen chủ tịch thành phố HCM - Sáng tạo khoa học kỹ thuật
              năm 2011
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}