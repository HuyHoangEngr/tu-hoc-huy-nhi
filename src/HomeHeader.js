import React, { Component } from "react";
import "./HomeHeader.scss";
import { toInteger } from "lodash";

let arrNameOfChapter = [
    "Chương 0. Hướng dẫn, hỏi đáp học tập hiệu quả!",
    "Chương 1. Ghi âm chữa lành não bộ",
    "Chương 2. Não bộ buổi 2",
    "Chương 3. Não bộ buổi 3",
    "Chương 4. Dinh dưỡng chữa lành- buổi 1",
    "Chương 5. Dinh dưỡng chữa lành - buổi 2",
    "Chương 6. Dinh dưỡng chữa lành- buổi 3",
    "Chương 7. Các loại bệnh",
    "Chương 8. Dạy con 5D1C- giao tiếp và nói- buổi 1",
    "Chương 9. Dạy con giao tiếp và nói- buổi 2",
    "Chương 10. Dạy con giao tiếp và nói - buổi 3",
    "Chương 11. Dạy con giao tiếp và nói - buổi 4",
    "Chương 12. Dạy con giao tiếp và nói - buổi 5",
    "Chương 13. Dạy con giao tiếp và nói - buổi 6",
    "Chương 14. Dạy con giao tiếp và nói - buổi 7",
    "Chương 15. Dạy con giao tiếp và nói - buổi 8",
    "Chương 16. Dạy con giao tiếp và nói - buổi 9",
    "Chương 17. Dạy con giao tiếp và nói - buổi 10",
    "Chương 18. Ôn tập",
    "Chương 19. Dạy con giao tiếp và nói - buổi 11",
    "Chương 20. Dạy con giao tiếp và nói - buổi 12",
    "Chương 21. Dạy con giao tiếp và nói - buổi 13",
    "Chương 22. Chữa lành ăn vạ",
    "Chương 23. Hỏi đáp về phần não bộ",
    "Chương 24. Chữa lành giấc ngủ",
    "Chương 25. Dạy con kỹ năng sống - buổi 1",
    "Chương 26. Dạy con kỹ năng sống - buổi 2",
    "Chương 27. Dạy con đi học hòa nhập- buổi 1",
    "Chương 28. Dạy con đi học hòa nhập - buổi 2",
    "Chương 29",
];

let arrVideo = [
    //chuong00
    [
        {
            title: "Bài 1. Học Cách Chữa Lành Con: Bắt Đầu Từ Việc Tự Học Và Tự Chữa Bản Thân",
            "video-source": "https://www.youtube.com/embed/aliUUamRrUM",
        },
        {
            title: "Bài 2. Chìa Khóa Chữa Lành Cho Trẻ: Trí Tuệ Và Tinh Thần Của Cha Mẹ",
            "video-source": "https://www.youtube.com/embed/qcKbuAWj8TM",
        },
        {
            title: "Bài 3. 80% Thành Công Chữa Lành Cho Con Đến Từ Hạnh Phúc Của Cha Mẹ",
            "video-source": "",
        },
        {
            title: "Bài 4. Từ Chữa Lành Đến Ước Mơ Lớn: Cùng Con Xây Dựng Tương Lai",
            "video-source": "",
        },
        {
            title: "Bài 5. Kế Hoạch Hạnh Phúc: Từ Chữa Lành Đến Ước Mơ Cùng Con",
            "video-source": "",
        },
        {
            title: `Bài 6. Từ "Bé" Thành "Bạn": Bí Quyết Nuôi Dạy Trẻ Tự Tin Và Mạnh Mẽ`,
            "video-source": "",
        },
        {
            title: "Bài 7. Giải Pháp Tự Nhiên Chữa Viêm Da Cơ Địa Cho Trẻ Từ Bên Trong",
            "video-source": "",
        },
        {
            title: "Bài 8. Hướng Dẫn Cách Xử Lý Trẻ Leo Trèo, Ăn Vạ Và Bùng Nổ Cảm Xúc",
            "video-source": "",
        },
    ],
    //chuong01
    [
        {
            title: "Bài 1. Hành Trình Đồng Hành Với Trẻ Tự Kỷ: Phải Là Chiến Binh Và Người Bạn Thật Sự",
            "video-source": "",
        },
        {
            title: "Bài 2. Nhảy đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 3. Tôi không cần thầy nghiêm túc – tôi cần thầy khùng điên để con tôi được chữa lành!",
            "video-source": "",
        },
        {
            title: "Bài 4. Bạn tin vào vong hay tin vào việc não con sẽ sáng lên khi nghe nhạc yêu thương?",
            "video-source": "",
        },
        {
            title: "Bài 5. Một đêm – một giấc ngủ – một bước hồi sinh cho tâm hồn con - Quy trình chữa lành.",
            "video-source": "",
        },
        {
            title: "Bài 6. Thực hành ghi âm chữa lành não bộ!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 1",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
        {
            title: "Nhạc và lời ghi âm chữa lành não bộ",
            "video-source": "",
        },
    ],
    //chuong02
    [
        {
            title: "Bài 1. Học cách trở thành “một đứa trẻ tự kỷ” để kết nối với con bạn",
            "video-source": "",
        },
        {
            title: "Bài 2. Tư duy hình tròn – con tư duy hình vuông: vì sao mãi không kết nối được?",
            "video-source": "",
        },
        {
            title: "Bài 3. Bảng điểm 1–10 giúp cha mẹ nhìn ra gốc rễ vấn đề của trẻ tự kỷ",
            "video-source": "",
        },
        {
            title: "Bài 4. Bí mật để bài chữa lành não bộ phát huy tối đa hiệu quả",
            "video-source": "",
        },
        {
            title: "Bài 5. Tình yêu cha mẹ có thể viết lại vận mệnh một đứa trẻ – câu chuyện có thật!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 2",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong03
    [
        {
            title: "Bài 1. Tình yêu + hiểu đúng = chìa khóa giúp trẻ tự kỷ phát triển",
            "video-source": "",
        },
        {
            title: `Bài 2. "Mẹ không dạy theo cách của mẹ, mẹ học cách con học" – công thức của chữa lành`,
            "video-source": "",
        },
        {
            title: `Bài 3. Khi con bạn là "người cá" – bạn phải bơi cùng con để giúp con trở lại`,
            "video-source": "",
        },
        {
            title: "Bài 4. Khi cha mẹ vững vàng, con sẽ ổn – cam kết từ trái tim",
            "video-source": "",
        },
        {
            title: "Bài 5. Niềm tin – Năng lượng chữa lành mạnh mẽ nhất mà con cần",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 3",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong04
    [
        {
            title: "Bài 1. Dinh dưỡng chỉ chiếm 10% sức khỏe! Vậy 90% còn lại là gì?",
            "video-source": "",
        },
        {
            title: "Bài 2. Thầy Minh: Tại sao người uống sữa bò vẫn bị loãng xương?",
            "video-source": "",
        },
        {
            title: "Bài 3. Khả năng hấp thu là gì? Gốc rễ của tư duy dinh dưỡng mới",
            "video-source": "",
        },
        {
            title: "Bài 4. Đừng để thương con sai cách – Kiến thức sai = Trả giá đắt!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 4",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong05
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Cảm xúc là di truyền nghĩa đen – Cha mẹ sống sao, con sẽ như vậy",
            "video-source": "",
        },
        {
            title: "Bài 2. Bí mật sức khỏe: Kháng thể tự sinh mạnh hơn mọi loại kháng sinh",
            "video-source": "",
        },
        {
            title: "Bài 3. Ăn gì không quan trọng bằng ăn đủ – Đừng lầm tưởng thực phẩm đắt tiền",
            "video-source": "",
        },
        {
            title: "Bài 4. Ngưng hỏi “ăn gì tốt?” nếu bạn không biết rõ “tốt để làm gì!”",
            "video-source": "",
        },
        {
            title: "Bài 5. Trả lời thật: Ăn gì quan trọng, hay “ăn để làm gì” mới quan trọng?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 5",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong06
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Nguyên nhân - Giải pháp kén ăn",
            "video-source": "",
        },
        {
            title: `Bài 2. Đường gây sâu răng, rối loạn thần kinh và… khiến con bạn “tăng động”`,
            "video-source": "",
        },
        {
            title: `Bài 3. Bí quyết massage bụng cho trẻ táo bón, kết hợp "thần chú" yêu thương`,
            "video-source": "",
        },
        {
            title: "Bài 4. Anthony William & hành trình giải mã não bộ trẻ tự kỷ",
            "video-source": "",
        },
        {
            title: "Bài 5. Nồi nhôm gây độc: Đổi ngay nếu bạn đang nấu ăn cho con!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 6",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong07
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Đừng ép trẻ ăn – Hãy hiểu nguyên nhân thật sự khiến trẻ kén ăn",
            "video-source": "",
        },
        {
            title: "Bài 2. Dẹp TV, dẹp điện thoại: Hồi sinh bữa ăn gia đình đúng nghĩa",
            "video-source": "",
        },
        {
            title: "Bài 3. Nguyên lý dinh dưỡng thông minh: Không cần ép, chỉ cần đúng cách",
            "video-source": "",
        },
        {
            title: "Bài 4. Vì sao enzyme tiêu hóa là chìa khóa để trẻ ăn ngon hơn?",
            "video-source": "",
        },
        {
            title: "Bài 5. Tự kỷ có khỏi nhờ dinh dưỡng không? Đây là câu trả lời",
            "video-source": "",
        },
        {
            title: "Bài 6. Ho, sốt, tiêu chảy – đừng vội dùng thuốc! Cơ thể con đang tự chữa lành",
            "video-source": "",
        },
        {
            title: "Bài 7. Cơ thể trẻ tự chữa lành – Cha mẹ chỉ cần biết cách hỗ trợ đúng",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 7",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong08
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Thầy Minh chia sẻ thực tế: Vì sao “ao nước sạch” quan trọng với con trẻ",
            "video-source": "",
        },
        {
            title: "Bài 2. Thầy Minh chỉ rõ: Đừng dạy lý thuyết, hãy dạy bằng hành động thực tế",
            "video-source": "",
        },
        {
            title: "Bài 3. Tại sao trẻ lớn rồi vẫn ngậm tay, bỏ đồ vào miệng? Cảnh báo rối loạn phát triển",
            "video-source": "",
        },
        {
            title: "Bài 4. Phương pháp 5D + 1C: Cách dạy con nói và phát triển ngôn ngữ tự nhiên",
            "video-source": "",
        },
        {
            title: "Bài 5. Thầy Minh giải đáp: Vì sao con đi vệ sinh không đúng chỗ?",
            "video-source": "",
        },
        {
            title: "Bài 6. Cha mẹ ơi, đừng dạy con khi não con chưa sẵn sàng tiếp nhận!",
            "video-source": "",
        },
        {
            title: "Bài 7. Sự thật về sữa chua, sữa hạt và nước ép trong chữa lành tiêu hóa cho trẻ",
            "video-source": "",
        },
        {
            title: "Bài 8. Con bạn hay “nói nhảm”? Đừng vội la mắng – Đây là lý do",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 8",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong09
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Phương pháp 5D & 1C giúp trẻ chậm nói bứt phá ngoạn mục",
            "video-source": "",
        },
        {
            title: "Bài 2. Rối loạn cảm xúc ở trẻ: Nguyên nhân, biểu hiện và cách xử lý",
            "video-source": "",
        },
        {
            title: "Bài 3. Chữa lành cảm xúc cha mẹ – Chìa khóa giúp con bứt phá",
            "video-source": "",
        },
        {
            title: "Bài 4. Cảm xúc đến từ suy nghĩ – Thay đổi tư duy để chữa lành chính mình",
            "video-source": "",
        },
        {
            title: "Bài 5. Cảm xúc đến từ suy nghĩ – Thay đổi tư duy để chữa lành chính mình",
            "video-source": "",
        },
        {
            title: "Bài 6. Cảm xúc đến từ suy nghĩ – Thay đổi tư duy để chữa lành chính mình",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 9",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong10
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Giao mà không tiếp – Sai lầm phổ biến khi dạy trẻ đặc biệt",
            "video-source": "",
        },
        {
            title: "Bài 2. Muốn con nói được – Phải học cách “tiếp” trước khi “giao”!",
            "video-source": "",
        },
        {
            title: "Bài 3. Dừng dạy nói – Nếu chưa biết tiếp nhận thông điệp của con!",
            "video-source": "",
        },
        {
            title: "Bài 4. Tình yêu và niềm tin của cha mẹ có thể làm nên phép màu – Giống như mẹ của Edison đã làm",
            "video-source": "",
        },
        {
            title: "Bài 5. Giao tiếp là 2 chiều: Đừng chỉ dạy – hãy học cách tiếp nhận từ con",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 10",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong11
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong12
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong13
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong14
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong15
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong16
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong17
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong18
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong19
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong20
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong21
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong22
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong23
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong24
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong25
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong26
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong27
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong28
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
    //chuong29
    [
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
        {
            title: "",
            "video-source": "",
        },
    ],
];
class HomeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idChapter: "",
            idLesson: "",
            videoTitle: "",
            nguonVideo: "",
        };
    }

    resetIdLesson = () => {
        this.setState({
            idLesson: "",
        });
        // console.log("Reset Id lesson >>>");
    };

    handleClickChapter = (idChapterRequest) => {
        this.setState({
            idChapter: idChapterRequest,
        });
        this.resetIdLesson();
        // console.log(
        //     "handleClickChapter check id chapter >>>",
        //     this.state.idChapter
        // );
        // console.log("check type idChapRequest >>>", typeof idChapterRequest);
    };

    handleClickLesson = (idChapterRequest, idLessonRequest) => {
        this.setState({
            idLesson: idLessonRequest,
        });
        // console.log(
        //     `check id chapter - lesson >>> ${this.state.idChapter} ${this.state.idLesson}`
        // );

        this.handleUpdateTitleVideo(idChapterRequest, idLessonRequest);
    };

    handleUpdateTitleVideo = (idChapterRequest, idLessonRequest) => {
        // console.log(`check arrVideo>>> title: ${
        //     arrVideo[toInteger(idChapterRequest)][toInteger(idLessonRequest)]
        //         .title
        // } ,
        // src: ${
        //     arrVideo[toInteger(idChapterRequest)][toInteger(idLessonRequest)][
        //         "video-source"
        //     ]
        // }`);
        this.setState({
            videoTitle:
                arrVideo[toInteger(idChapterRequest)][
                    toInteger(idLessonRequest)
                ].title,
            nguonVideo:
                arrVideo[toInteger(idChapterRequest)][
                    toInteger(idLessonRequest)
                ]["video-source"],
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div class="scrollmenu">
                        {arrNameOfChapter.map((item, index) => {
                            return (
                                <div className="chapter" key={index}>
                                    <div
                                        className="chapter-name"
                                        onClick={() => {
                                            // console.log(
                                            //     `check state idChapter `,
                                            //     this.state.idChapter
                                            // );
                                            this.handleClickChapter(
                                                index.toString()
                                            );
                                        }}
                                    >
                                        {item}
                                    </div>
                                    <div
                                        className={
                                            this.state.idChapter ===
                                            index.toString()
                                                ? "chapter-click"
                                                : "chapter-none-click"
                                        }
                                    >
                                        {/* {console.log(
                                            `check state idChapter `,
                                            this.state.idChapter
                                        )} */}
                                        {/* {console.log(
                                            `check index ${index} ${typeof index}`
                                        )} */}
                                        {arrVideo[index].map(
                                            (itemLesson, indexLesson) => {
                                                // console.log(
                                                //     `check arrVideo: ${itemLesson.title}`
                                                // );
                                                return (
                                                    <div
                                                        className={
                                                            this.state
                                                                .idLesson ===
                                                            indexLesson.toString()
                                                                ? "active"
                                                                : "non-active"
                                                        }
                                                        onClick={() => {
                                                            console.log(
                                                                `chapter : ${index.toString()} --- bai : ${indexLesson.toString()}`
                                                            );
                                                            this.handleClickLesson(
                                                                index.toString(),
                                                                indexLesson.toString()
                                                            );
                                                        }}
                                                    >
                                                        {itemLesson.title}
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {/* chuong00 */}
                        {/* <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("0");
                                }}
                            >
                                Chương 00. Hướng dẫn, hỏi đáp học tập hiệu quả!
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "0"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0", "0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0", "1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0", "2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div> */}

                        {/* chuong01 */}
                        {/* <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("1");
                                }}
                            >
                                Chương 1. Ghi âm chữa lành não bộ
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "1"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1", "0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1", "1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1", "2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div> */}

                        {/* chuong02 */}
                        {/* <div className="chapter">
                            <div
                                className="chapter-name"
                                onClick={() => {
                                    this.handleClickChapter("2");
                                }}
                            >
                                Chương 2. Não bộ buổi 2
                            </div>
                            <div
                                className={
                                    this.state.idChapter === "2"
                                        ? "chapter-click"
                                        : "chapter-none-click"
                                }
                            >
                                <div
                                    className={
                                        this.state.idLesson === "0"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("0");
                                    }}
                                >
                                    Home
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "1"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("1");
                                    }}
                                >
                                    News
                                </div>
                                <div
                                    className={
                                        this.state.idLesson === "2"
                                            ? "active"
                                            : "non-active"
                                    }
                                    onClick={() => {
                                        this.handleClickLesson("2");
                                    }}
                                >
                                    Contact
                                </div>
                            </div>
                        </div>  */}
                    </div>
                    <div className="main-content">
                        <div className="video-title">
                            {this.state.videoTitle}
                        </div>
                        <div className="video">
                            <iframe
                                width="1296"
                                height="729"
                                src={this.state.nguonVideo}
                                title=""
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowFullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default HomeHeader;
