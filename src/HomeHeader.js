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
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Cười, khóc, giơ tay: Thầy Minh biến học giao tiếp thành trò chơi thú vị",
            "video-source": "",
        },
        {
            title: "Bài 2. Cách trò chơi đơn giản dạy trẻ giao tiếp, phản xạ và kỷ luật",
            "video-source": "",
        },
        {
            title: "Bài 3. Yếu tố số 1 quyết định sự phát triển của con là gì?",
            "video-source": "",
        },
        {
            title: "Bài 4. Trẻ sẽ chủ động giao tiếp khi bạn làm đúng 3 bước này",
            "video-source": "",
        },
        {
            title: "Bài 5. Thầy Minh giải mã thông điệp yêu thương ẩn trong hành vi “cắn mẹ”",
            "video-source": "",
        },
        {
            title: "Bài 6. Tăng động, nghịch phá ở lớp – Có đáng lo không?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 11",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong12
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Phần ôn bài",
            "video-source": "",
        },
        {
            title: "Bài 1. 3 yếu tố tạo nên năng lượng – Chìa khóa chơi và dạy con hiệu quả",
            "video-source": "",
        },
        {
            title: "Bài 2. Phân biệt rõ ràng giữa tự kỷ và rối loạn – Chìa khóa chữa lành",
            "video-source": "",
        },
        {
            title: "Bài 3. Bốn chiến lược giúp trẻ tự kỷ học nói và kết nối xã hội hiệu quả",
            "video-source": "",
        },
        {
            title: "Bài 4. Từ bắt chước đến luân phiên – Hành trình mở lòng của trẻ tự kỷ",
            "video-source": "",
        },
        {
            title: "Bài 5. Thiết kế trò chơi đúng cách – Giúp trẻ tự kỷ học nhanh và vui hơn",
            "video-source": "",
        },
        {
            title: "Bài 6. Từ “xé giấy một mình” đến “chơi cùng mẹ” – Lộ trình 3 bước hiệu quả",
            "video-source": "",
        },
        {
            title: "Bài 7. Nguyên lý vàng: Chơi đủ đã thì trẻ sẽ chơi đa dạng",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 12",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong13
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Năng lượng của bạn chính là nước nuôi dưỡng tâm hồn con trẻ!",
            "video-source": "",
        },
        {
            title: "Bài 2. Làm lại bài tập “ba hũ cơm” – Thí nghiệm đơn giản, bài học sâu sắc",
            "video-source": "",
        },
        {
            title: "Bài 3. 7 năm – 90 tỷ tế bào thay đổi: Sự thật về tiềm năng chữa lành từ bên trong",
            "video-source": "",
        },
        {
            title: "Bai 4. Bạn đang nuôi dưỡng tương lai hay kìm hãm con qua cách gọi tên hằng ngày?",
            "video-source": "",
        },
        {
            title: "Bài 5. Tên gọi không chỉ để gọi – Đó là thông điệp lập trình tương lai của trẻ!",
            "video-source": "",
        },
        {
            title: `Bài 6. Dạy con "khôn" là cho con quyền được sai, được thử, được đau!`,
            "video-source": "",
        },
        {
            title: "Bài 7. Con thích lao ra sông, nhảy vách đá – Cha mẹ cần phản ứng thế nào?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 13",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong14
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Ngôn ngữ cảm xúc: Chiếc chìa khóa đầu tiên để kết nối với trẻ tự kỷ",
            "video-source": "",
        },
        {
            title: "Bài 2. Tự ti, buồn bực, mệt mỏi – Cách nhận diện và chuyển hóa cảm xúc tiêu cực",
            "video-source": "",
        },
        {
            title: "Bài 3. Tuyệt đối tránh nói “ĐỪNG” với con – Não trẻ không hiểu từ đó!",
            "video-source": "",
        },
        {
            title: "Bài 4. Muốn con NGHE LỜI, đừng dạy “ngoan ngoãn” – Dạy con PHỐI HỢP và KHÔN NGOAN!",
            "video-source": "",
        },
        {
            title: "Bài 5. Bí mật đằng sau hành vi “kỳ lạ” của trẻ mà bố mẹ chưa hiểu…",
            "video-source": "",
        },
        {
            title: "Bài 6. Khi cần, hãy nghiêm như “chiến sĩ công an” – Dạy con không phải lúc nào cũng nhẹ nhàng!",
            "video-source": "",
        },
        {
            title: "Bài 7. Gõ đồ, cắn tay, ngậm vật – Làm sao hiểu đúng và xử lý khôn ngoan?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 14",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong15
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. 5 ngôn ngữ yêu thương – Chìa khóa để nuôi dạy trẻ rối loạn cảm xúc",
            "video-source": "",
        },
        {
            title: `Bài 2. Bài học từ cá heo: Đừng bắt con "đói yêu thương"`,
            "video-source": "",
        },
        {
            title: "Bài 3. Khen đúng lúc, đúng cách: Giúp trẻ phát triển cảm xúc và hành vi",
            "video-source": "",
        },
        {
            title: "Bài 4. Yêu thương không chỉ là lời nói – Đó là hệ thống bạn xây cho con",
            "video-source": "",
        },
        {
            title: "Bài 5. Hôn nhân không chỉ là trách nhiệm – Là nơi nuôi dưỡng ước mơ cùng nhau",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 15",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong16
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. 10 Tuyên bố cha mẹ tuyệt vời – Nguồn năng lượng chữa lành mỗi ngày!",
            "video-source": "",
        },
        {
            title: "Bài 2. 5 bài massage chữa lành giúp trẻ tự kỷ, chậm nói thư giãn và kết nối!",
            "video-source": "",
        },
        {
            title: "Bài 3. Không thuốc vẫn khỏe – Bí quyết chăm sóc con bằng massage và vitamin",
            "video-source": "",
        },
        {
            title: "Bài 4. Từ “sai vặt” thành yêu thương – Dạy con làm việc nhà đúng cách",
            "video-source": "",
        },
        {
            title: "Bài 5. Kỷ luật với chính mình – Yêu thương đúng cách với con",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 16",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong17
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Trắc nghiệm 5 tiêu chí – Phát hiện sớm dấu hiệu rối loạn phát triển",
            "video-source": "",
        },
        {
            title: "Bài 2. Tự kiểm tra khả năng giao tiếp & ngôn ngữ của con tại nhà – Hướng dẫn chi tiết",
            "video-source": "",
        },
        {
            title: "Bài 3. Ép con nói như ép mía – Làm sao để ra ngọt chứ không ra chanh?",
            "video-source": "",
        },
        {
            title: "Bài 4. Giận giả vờ, thương thật lòng – Dạy con bằng mẹo cảm xúc",
            "video-source": "",
        },
        {
            title: "Bài 5. Đừng ép con học nếu bạn chưa hiểu điều này!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 17",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong18
    [
        {
            title: "Bài 1. Áp dụng đúng – đủ – đều, phụ huynh bất ngờ với tiến bộ thần tốc của con",
            "video-source": "",
        },
        {
            title: "Bài 2. Cô giáo chia sẻ bí quyết giúp con từng “không có nhận thức” nay phát triển thần kỳ",
            "video-source": "",
        },
        {
            title: "Bài 3. Tắm sông cùng con không chỉ là tắm – Đó là phép màu kết nối và yêu thương",
            "video-source": "",
        },
        {
            title: "Bài 4. Con không chịu uống nước ép? Đây là cách mẹ Tím chinh phục thành công!",
            "video-source": "",
        },
        {
            title: "Bài 5. Con chưa nói được? Bà Lộc vẫn không bỏ cuộc – Câu chuyện lay động lòng người",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 18",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong19
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Thầy Minh: Đừng để “con quỷ trong đầu” phá hỏng con bạn!",
            "video-source": "",
        },
        {
            title: "Bài 2. Đừng ép con nói! Hãy đặt câu hỏi để con… suy nghĩ trước đã",
            "video-source": "",
        },
        {
            title: "Bài 3. Cách dùng 6W1H để mở khóa não bộ của trẻ đặc biệt",
            "video-source": "",
        },
        {
            title: "Bài 4. Kỹ thuật giúp trẻ trả lời “bằng được” – mà vẫn vui và phát triển tư duy",
            "video-source": "",
        },
        {
            title: "Bài 5. 3 kỹ thuật hỏi giúp trẻ phát triển tư duy và nói chủ động",
            "video-source": "",
        },
        {
            title: "Bài 6. Chiến lược giúp con ghép câu mạch lạc và tư duy logic",
            "video-source": "",
        },
        {
            title: "Bài 7. 6 câu hỏi biến một trang truyện tranh thành bài học giao tiếp tuyệt vời",
            "video-source": "",
        },
        {
            title: `Bài 8. Đừng mang yêu quái về nhà – Thầy Minh nói về “nhạc ung thư”`,
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 19",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong20
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Vì sao con bạn chưa tiến bộ? Lý do thất bại được thầy Minh chỉ rõ",
            "video-source": "",
        },
        {
            title: `Bài 2. Thầy Minh: "Tôi buồn khi phụ huynh thất bại vì thiếu kiên định và kết nối"`,
            "video-source": "",
        },
        {
            title: "Bài 3. Đừng dạy con nói – hãy dạy con TƯ DUY trước đã!",
            "video-source": "",
        },
        {
            title: `Bài 4. "Xa tầm với": Chiến thuật đơn giản giúp con bật lên tư duy`,
            "video-source": "",
        },
        {
            title: `Bài 5. Chiến lược "làm mẫu rồi rút lui" – Bí quyết giúp trẻ tự lập từng bước`,
            "video-source": "",
        },
        {
            title: "Bài 6. Ngôn ngữ hướng tới – Bí quyết giúp con chủ động và biết suy nghĩ",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 20",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong21
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Không thử thách, không trưởng thành – triết lý giáo dục của thầy Minh",
            "video-source": "",
        },
        {
            title: "Bài 2. Tại sao trẻ trên 5 tuổi thay đổi chậm hơn? Câu trả lời bất ngờ từ thầy Minh",
            "video-source": "",
        },
        {
            title: "Bài 3. Thầy Minh: Muốn con phát triển, cha mẹ phải học trước",
            "video-source": "",
        },
        {
            title: "Bài 4. Có nên cho con tự kỷ nghỉ học? – Câu trả lời không nằm ở trường",
            "video-source": "",
        },
        {
            title: "Bài 5. Dốc hết vì con: Yêu thương hay vô tình đánh mất chính mình?",
            "video-source": "",
        },
        {
            title: "Bài 6. Dạy con bằng yêu thương hay cảm xúc mạnh? Thầy Minh nói rõ!",
            "video-source": "",
        },
        {
            title: "Bài 7. Thay vì bảo “ngoan đi”, hãy nói điều này – Cách dạy con đỉnh cao!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 21",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong22
    [
        {
            title: "Bài 1. Trẻ ăn vạ không phải vì hư – Hiểu đúng để không làm sai!",
            "video-source": "",
        },
        {
            title: "Bài 2. Ăn vạ không phải do trẻ không biết gì – Trẻ rối loạn cũng biết tính toán!",
            "video-source": "",
        },
        {
            title: `Bài 3. Khi cha mẹ thành "cảnh sát": Cách xử lý ăn vạ không khoan nhượng!`,
            "video-source": "",
        },
        {
            title: `Bài 4. Ăn vạ: Đừng dạy con “chiến thắng” bằng nước mắt!`,
            "video-source": "",
        },
        {
            title: "Bài 5. Kiên trì + Trí tuệ = Công thức vàng để nuôi dạy trẻ phát triển toàn diện",
            "video-source": "",
        },
        {
            title: "Bài 6. Dạy con như chim đại bàng – Không cứu, không ép, chỉ dẫn đường!",
            "video-source": "",
        },
        {
            title: "Bài 7. Trị ăn vạ chỉ trong 1 nốt nhạc – 5 bước vàng không thể thiếu!",
            "video-source": "",
        },
        {
            title: "Bài 8. Đừng dỗ, đừng dọa – Đây mới là cách trị ăn vạ hiệu quả nhất",
            "video-source": "",
        },
        {
            title: "Bài 9. Muốn con có trí tuệ, phải để con tự trả giá!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 22",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong23
    [
        {
            title: "Bài 1. Con bạn có rối loạn hành vi? Hãy bắt đầu chữa từ chính năng lượng của bạn",
            "video-source": "",
        },
        {
            title: "Bài 2. Cách mẹ chữa lành 80% rối loạn cho con mà không dùng thuốc",
            "video-source": "",
        },
        {
            title: "Bài 3. Muốn con hết rối loạn – cha mẹ phải bắt đầu từ chính mình",
            "video-source": "",
        },
        {
            title: "Bài 4. Tự kỷ không phải là bệnh – Hãy chữa lành rối loạn trước",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 23",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong24
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Giấc ngủ không chỉ để nghỉ – Mà để chữa lành từ bên trong!",
            "video-source": "",
        },
        {
            title: "Bài 2. Ngủ không sâu, con khó lớn – Tất cả bắt đầu từ melatonin!",
            "video-source": "",
        },
        {
            title: "Bài 3. Đừng ép con ngủ đúng giờ – hãy đưa con lên giường đúng giờ!",
            "video-source": "",
        },
        {
            title: "Bài 4. Giải pháp thực tế giúp con ngủ ngon mà không cần thuốc ngủ",
            "video-source": "",
        },
        {
            title: "Bài 5. 4 huyệt đạo chữa mất ngủ cho trẻ: Dễ làm, hiệu quả bất ngờ!",
            "video-source": "",
        },
        {
            title: "Bài 6. Lòng biết ơn – Quy luật số 12 của vũ trụ giúp con trưởng thành hạnh phúc",
            "video-source": "",
        },
        {
            title: "Bài 7. Thực hành thiền biết ơn giúp con ngủ ngon, tâm trí bình an",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 24",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong25
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Bước chuyển mạnh mẽ: Từ chữa lành sang huấn luyện kỹ năng sống cho trẻ",
            "video-source": "",
        },
        {
            title: "Bài 2. Những kỹ năng phát triển con cần có để thành công trong tương lai",
            "video-source": "",
        },
        {
            title: "Bài 3. Cha mẹ đừng nói con “tự lập” nếu không làm được điều này!",
            "video-source": "",
        },
        {
            title: "Bài 4. Chia nhỏ đến từng bước – cách dạy trẻ hiệu quả mà phụ huynh ít biết!",
            "video-source": "",
        },
        {
            title: "Bài 5. Bài học lớn nhất dạy con: Trở thành tấm gương sống",
            "video-source": "",
        },
        {
            title: "Bài 6. 5 bước dạy kỹ năng sống cho trẻ: công thức huấn luyện từ chuyên gia",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 25",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong26
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Chữa lành cảm xúc cho trẻ – Bí quyết nằm ở cha mẹ",
            "video-source": "",
        },
        {
            title: "Bài 2. Chỉ dạy con bằng lời? Bạn chỉ truyền được 5% kiến thức!",
            "video-source": "",
        },
        {
            title: `Bài 3. Từ “xé sách” đến “nghiện sách” – Chỉ cần thay đổi cách tiếp cận`,
            "video-source": "",
        },
        {
            title: "Bài 4. Muốn con thích học? Hãy học cùng con, đừng chỉ dạy!",
            "video-source": "",
        },
        {
            title: "Bài 5. Làm điều này - Giúp con nhớ bài sâu hơn gấp 10 lần!",
            "video-source": "",
        },
        {
            title: "Bài 6. Xé giấy, la hét, vẫy tay – Biểu hiện bệnh hay cơ chế tự chữa lành của trẻ?",
            "video-source": "",
        },
        {
            title: "Bài 7. Trẻ hay đập đầu giữa đêm là do rối loạn? Cách xử lý sâu từ bên trong cha mẹ",
            "video-source": "",
        },
        {
            title: "Bài 8. Con cứ đòi sờ cùi chỏ, đòi mua xe hoài – Là ăn vạ hay rối loạn?",
            "video-source": "",
        },
        {
            title: "Bài 9. Snack, nước ngọt và cái bẫy rối loạn não bộ ở trẻ – Cha mẹ cần biết!",
            "video-source": "",
        },
        {
            title: "Bài 10. Trẻ đập phá, xô cửa không phải rối loạn – mà là chưa biết chơi!",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 26",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong27
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. 3 giai đoạn chữa lành và dạy con hòa nhập: Phụ huynh cần hiểu rõ!",
            "video-source": "",
        },
        {
            title: "Bài 2. Hướng dẫn thiết lập lớp học tại nhà giúp trẻ sẵn sàng hòa nhập",
            "video-source": "",
        },
        {
            title: "Bài 3. 2 kỹ năng đầu tiên cha mẹ cần dạy con trước khi đến trường",
            "video-source": "",
        },
        {
            title: "Bài 4. Làm theo yêu cầu: Kỹ năng khó nhất cha mẹ cần rèn cho trẻ",
            "video-source": "",
        },
        {
            title: "Bài 5. Dạy con nghe lời bằng sự tôn trọng và khen ngợi đúng lúc",
            "video-source": "",
        },
        {
            title: "Bài 6. Giải pháp khi trẻ khóc mỗi sáng không chịu đi học",
            "video-source": "",
        },
        {
            title: "Bài 7. Đừng dạy con sợ người lạ – Dạy kỹ năng tự bảo vệ mới là điều quan trọng",
            "video-source": "",
        },
        {
            title: "Bài 8. Trẻ đánh bạn, xoay người trong lớp: Xử lý sao cho đúng cách?",
            "video-source": "",
        },
        {
            title: "Bài 9. Tẩy giun cho trẻ rối loạn phát triển: nên dùng thuốc hay giải pháp tự nhiên?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 27",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong28
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Ba giai đoạn chữa lành – Làm đúng mới mang con về đích",
            "video-source": "",
        },
        {
            title: `Bài 2. Thầy Minh cảnh báo: Đừng tin quảng cáo "chữa tự kỷ" – nguy hiểm!`,
            "video-source": "",
        },
        {
            title: "Bài 3. Trẻ không làm theo lời? Hãy bắt đầu từ 10 mệnh lệnh đơn giản này!",
            "video-source": "",
        },
        {
            title: `Bài 4. Lý do con không làm theo lời: Cha mẹ đang “ra lệnh” sai cách!`,
            "video-source": "",
        },
        {
            title: "Bài 5. Bí quyết kích hoạt não bộ qua MẮT – TAY – MIỆNG: Dạy 1 lần, nhớ cả đời!",
            "video-source": "",
        },
        {
            title: `Bài 6. Muốn con phát triển? Hãy chữa lành “nước” – chính bản thân cha mẹ trước!`,
            "video-source": "",
        },
        {
            title: "Bài 7. Trẻ tự kỷ – mất kết nối cảm xúc: Cha mẹ phải làm gì?",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 28",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
            "video-source": "",
        },
    ],
    //chuong29
    [
        {
            title: "Chia sẻ đầu giờ",
            "video-source": "",
        },
        {
            title: "Bài 1. Bạn đang ở nhóm nào trong hành trình chữa lành cho con?",
            "video-source": "",
        },
        {
            title: "Bài 2. Cho con mượn đôi chân: Câu chuyện huyền thoại về tình cha con lay động triệu người",
            "video-source": "",
        },
        {
            title: "Bài 3. Con bạn đang bị ảnh hưởng bởi quá khứ bạn chưa chữa lành",
            "video-source": "",
        },
        {
            title: "Bài 4. Bạn có thật sự tham gia hành trình chữa lành không? Hay chỉ đang đứng ngoài cuộc?",
            "video-source": "",
        },
        {
            title: "Bài 5. Tôi xin lỗi – Xin hãy tha thứ – Cảm ơn – Tôi yêu bạn: 4 câu làm thay đổi cuộc đời",
            "video-source": "",
        },
        {
            title: "Bài 6. Bài thực hành chữa lành Ho’oponopono cùng con – mở khóa tình yêu vô điều kiện",
            "video-source": "",
        },
        {
            title: "Bài 7. Bài học từ trái tim: Cách chữa lành con bằng tình yêu của cha mẹ",
            "video-source": "",
        },
        {
            title: "Bài 8. 28 ngày thay đổi cuộc đời: Chữa lành thân – tâm – trí",
            "video-source": "",
        },
        {
            title: "Tóm tắt chương 29",
            "video-source": "",
        },
        {
            title: "Bài tập cần hoàn thành",
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
