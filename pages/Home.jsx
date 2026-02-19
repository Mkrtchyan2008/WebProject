import React, { useState } from 'react';
import {
  FaInstagram, FaTiktok, FaFacebook, FaYoutube,
  FaViber, FaWhatsapp, FaTelegram, FaAngleDown, FaAngleUp,
} from 'react-icons/fa';

// Swiper-ի հիմնական կոմպոնենտները և մոդուլները
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
// Swiper-ի ոճերը
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Նկարների ներմուծում
import logo from '../imges/logo.svg';
import icon1 from '../imges/icon1.svg';
import icon2 from '../imges/icon2.svg';
import icon3 from '../imges/icon3.svg';
import icon4 from '../imges/icon4.svg';
import icon5 from '../imges/icon5.svg';

import img2 from '../imges/img2.jpg';
import img3 from '../imges/img3.jpg';
import img4 from '../imges/img4.jpg';
import img5 from '../imges/img5.jpg';
import img6 from '../imges/img6.jpg';
import img7 from '../imges/img7.jpg';
import img8 from '../imges/img8.jpg';
import img9 from '../imges/img9.jpg';
import img10 from '../imges/img10.jpg';
import img11 from '../imges/img11.jpg';
import img12 from '../imges/img12.jpg';
import img13 from '../imges/img13.jpg';
import img14 from '../imges/img14.jpg';
import img15 from '../imges/img15.jpg';
import img16 from '../imges/img16.jpg';
import img17 from '../imges/img17.jpg';
import img18 from '../imges/img18.jpg';
import img19 from '../imges/img19.jpg';
import img20 from '../imges/img20.jpg';
import img21 from '../imges/img21.jpg';
import img22 from '../imges/img22.jpg';
import img23 from '../imges/img23.jpg';
import img24 from '../imges/img24.jpg';
import img25 from '../imges/img25.jpg';
import img26 from '../imges/img26.jpg';
import img27 from '../imges/img27.jpg';
import img28 from '../imges/img28.jpg';
import img29 from '../imges/img29.jpg';
import img30 from '../imges/img30.jpg';
import img31 from '../imges/img31.jpg';
import img32 from '../imges/img32.jpg';
import img33 from '../imges/img33.jpg';
import img34 from '../imges/img34.jpg';
import img35 from '../imges/img35.jpg';
import img36 from '../imges/img36.jpg';
import img37 from '../imges/img37.jpg';
import img38 from '../imges/img38.jpg';
import img39 from '../imges/img39.jpg';
import img40 from '../imges/img40.jpg';
import img41 from '../imges/img41.jpg';
import img42 from '../imges/img42.jpg';
import img43 from '../imges/img43.jpg';
import img44 from '../imges/img44.jpg';
import img45 from '../imges/img45.jpg';
import img46 from '../imges/img46.jpg';
import img47 from '../imges/img47.jpg';
import img48 from '../imges/img48.jpg';
import img49 from '../imges/img49.jpg';
import img50 from '../imges/img50.jpg';
import img51 from '../imges/img51.jpg';
import img52 from '../imges/img52.jpg';
import img53 from '../imges/img53.jpg';
import img54 from '../imges/img54.jpg';
import img55 from '../imges/img55.jpg';
import img56 from '../imges/img56.jpg';
import img57 from '../imges/img57.jpg';
import img58 from '../imges/img58.jpg';
import img59 from '../imges/img59.jpg';
import img60 from '../imges/img60.jpg';
import img61 from '../imges/img61.jpg';
import img62 from '../imges/img62.jpg';
import img63 from '../imges/img63.jpg';
import img64 from '../imges/img64.jpg';
import img65 from '../imges/img65.jpg';
import img66 from '../imges/img66.jpg';
import img67 from '../imges/img67.jpg';
import img68 from '../imges/img68.jpg';
import img69 from '../imges/img69.jpg';
import img70 from '../imges/img70.jpg';
import img71 from '../imges/img71.jpg';
import img72 from '../imges/img72.jpg';
import img73 from '../imges/img73.jpg';
import img74 from '../imges/img74.jpg';
import img75 from '../imges/img75.jpg';
import img76 from '../imges/img76.jpg';
import img77 from '../imges/img77.jpg';
import img78 from '../imges/img78.jpg';
import img79 from '../imges/img79.jpg';
import img80 from '../imges/img80.jpg';
import img81 from '../imges/img81.jpg';
import img82 from '../imges/img82.jpg';
import img83 from '../imges/img83.jpg';
import img84 from '../imges/img84.jpg';
import img85 from '../imges/img85.jpg';
import img86 from '../imges/img86.jpg';
import img87 from '../imges/img87.jpg';
import img88 from '../imges/img88.jpg';
import img89 from '../imges/img89.jpg';
import img90 from '../imges/img90.jpg';
import img91 from '../imges/img91.jpg';
import img92 from '../imges/img92.jpg';
import img93 from '../imges/img93.jpg';
import img94 from '../imges/img94.jpg';



function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [showFullText1, setShowFullText1] = useState(false); // sec-3-ի համար
  const [showFullText2, setShowFullText2] = useState(false); // sec-5-ի համար

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleText1 = () => {
    setShowFullText1(!showFullText1);
  };

  const toggleText2 = () => {
    setShowFullText2(!showFullText2);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setCurrentImages(item.images || [item.img]);
    setGalleryOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setGalleryOpen(false);
  };

  const machinery = [
    {
      id: 1,
      name: "Fortschritt կոմբայններ",
      img: img27,
      images: [img27, img70, img71, img72, img73],
      description: "Fortschritt E301, E302, E303 ինքնագնաց խոտհնձիչներ (գերմանկա): Իրականացնում ենք խոտհնձիչների ներմուծում Գերմանիայից: Բոլոր պահեստամասերը և դետալները օրիգինալ գերմանական են: Տրամադրվում են խոտհնձիչները սարքին վիճակում, բոլոր պահեստամասերը որոնք կունենան խնդիրներ կփոխարինվեն նախքան գնորդին հանձնելը: Ընդունվում են պատվերներ, 2-3 ամիս անց խոտհնձիչը կլինի Հայաստանում:"
    },
    {
      id: 2,
      name: "Kubota տրակտորներ",
      img: img28,
      images: [img28, img74, img75],
      description: "Տրակտորի հզորություն` 9.5 - 21 ձ/ու: Ամբողջությամբ վերանորոգված են Ճապոնիայում` բարձրակարգ մասնագետների կողմից: Անիվները և մարտկոցը ամբողջությամբ նոր են: Ընդունվում են պատվերներ:"
    },
    {
      id: 3,
      name: "Բրիկետավորման համակարգ",
      img: img29,
      images: [img29, img76, img77],
      description: "Agrotec-ը հանդիսանում է գերմանական RUF Briquetting systems-ի պաշտոնական ներկայացուցիչը Հայաստանում: RUF համակարգերը նախատեսված են սղոցանյութի, փայտանյութի և մանրացված ծղոտից բրիկետներ պատրաստելու համար: Դրանք էկոլոգիապես մաքուր վառելիք են, բավական արդյունավետ համեմատած ավանդական վառելանյութերի հետ: Agrotec-ը 2 RUF համակարգեր է ներմուծել ՀՀ համագործակցելով ՄԱԿ-ի Զարգացման ծրագրերի հետ որոնք անխափան աշխատում են մինչ օրս:"
    },
    {
      id: 4,
      name: "Ոռոգման մեքենաներ և համակարգեր",
      img: img30,
      images: [img30, img78, img79],
      description: "Ջրող խողովակի տրամագիծ՝ 63, 70, 75, 82, 90, 100, 110 մմ: Ջրող խողովակի հնարավոր երկարություն՝ 160, 220, 250, 300, 330, 360, 400, 450, 500, 550, 600 մետր: Համակարգը կարող է աշխատել դիզելային և էլեկտրական պոմպով կամ տրակտորի կարդանին միացված մեխանիկական պոմպով:"
    },
    {
      id: 5,
      name: "Կարտոֆիլատնկիչ",
      img: img31,
      images: [img31, img80, img81],
      description: "Մեկ աշխատանքային ցիկլում սարքը կատարում է կարտոֆիլի տնկման հետ կապված բոլոր աշխատանքները՝ հերկում է ակոսներ, ցանում է կարտոֆիլը և ծածկում է հողով: Լեհական Bomet ընկերության 2 շարքանի: Շարքերի հեռավորություն՝ 72-75սմ: Կարտոֆիլի բունկերի տարողություն՝ 300 կգ: Մետաղական կամ սովորական անիվներով: Պարարտանյութի բունկերով: Քաշ՝ 220 կգ: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 6,
      name: "Փխրեցնող սարք",
      img: img32,
      images: [img32, img82],
      description: "Բազմակողմանի գործիքներ են կարտոֆիլի, եգիպտացորենի, այլ բանջարեղենների, ելակի և արմատային այլ մշակաբույսերի համար: Լեհական արտադրության սարքը կարող է օգտագործվել մոլախոտերի, շարքերի թուլացման, օդափոխման և հովացման համար: Շարքեր մինչև 60 սմ բարձրությամբ բույսերով: Մենք առաջարկում ենք սարքավորումները 3-5 աշխատանքային բաժիններով (2 շարքով): Մշակվող շարքերի լայնությունը կարող է ճշգրտվել 62,5 սմ-ից մինչև 75 սմ: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 7,
      name: "Ճյուղաղաց մեքենա",
      img: img33,
      images: [img33, img83, img84],
      description: "Դանակների քանակ՝ 4 հատ: Արտադրողականություն՝ 14-30 խմ/ժ: Աղացվող փայտի շառավիղը մինչև 12.5սմ, 15.5սմ, 16սմ կամ 17.5սմ: Քաշը՝ 590կգ: Տրակտորի հզորությունը սկսած 45 ձ/ու: Աշխատում է տրակտորի կարդանային լիսեռով: Սարքավորումների գները՝ կախված մանրացվող ճյուղերի տրամագծից, տարբեր են: Տրվում է 1 տարվա երաշխիք: Ձեռք բերեք լիզինգային տարբերակով՝ 20% կանխավճար, 2% տարեկան տոկոսադրույք:"
    },
    {
      id: 8,
      name: "Հողաֆրեզ իտալական",
      img: img34,
      images: [img34, img85],
      description: "Բարձրակարգ հողաֆրեզներ Իտալիայից: Մոդել UH 56 Աշխատանքային լայնություն՝ 150 սմ: Քաշ՝ 359կգ: Չափսեր՝ 1655x1055x795 մմ: Տրակտորի անհրաժեշտ հզորություն՝ 50-65 ձ/ու: Տրվում է 1 տարվա երաշխիք: Մոդել UM 53 Աշխատանքային լայնություն՝ 135 սմ: Քաշ՝ 256կգ: Չափսեր՝ 1500x940x720 մմ: Տրակտորի անհրաժեշտ հզորություն՝ 25-50 ձ/ու: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 9,
      name: "Հողաֆրեզ լեհական",
      img: img35,
      images: [img35, img86],
      description: "Լեհական BOMET ընկերության հողաֆրեզներ: Աշխատանքային լայնություն՝ 1.8մ կամ 2մ: Քաշ՝ 400 կգ (1.8մ), 420 կգ (2մ): Տրակտորի անհրաժեշտ հզորություն՝ 50-65 ձ/ու: Հզորության փոխանցման լիսեռ՝ 540 պտ/ր: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 10,
      name: "Պարարտանյութ ցրիչ",
      img: img36,
      images: [img36, img87, img88],
      description: "Իտալական COSMO ընկերության պարարտանյութ ցրիչ: Տարողունակություն՝ 500 լ (450 կգ): Չափեր՝ 1110 x 1110 x 1170 մմ: Ցրելու շրջավիղ՝ 8-14 մ: Քաշ՝ 63 կգ: Հզորության փոխանցման լիսեռ՝ 540 պտ/ր: Տրակտորի նվազագույն հզորություն՝ 20 ձ/ու: Տրվում է կարդանային լիսեռ: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 11,
      name: "Սրսկիչ",
      img: img37,
      images: [img37],
      description: "Լեհական Tolmet ընկերության Klara մոդելի սրսկիչներ: Տարողունակություն՝ 400լ, 600 լ կամ 800լ հեղուկի մակարդակի ցուցիչով: Բաքը պոլիէթիլենից է: Ճնշում՝ 40 բար: Թևերի բացվածք՝ 10մ, 12մ, 14մ, 15մ, 16մ կամ 18մ, կառավարվող համակարգով: Մաքուր ջրի բաք ծորակով՝ ձեռքերը լվանալու համար: Բոլոր տեսակի պահեստամասերն առկա են: Սարքավորումների գները՝ կախված տարողունակությունից և թևերի բացվածքից, տարբեր են: Տրվում է 1 տարվա երաշխիք: Ձեռք բերեք լիզինգային տարբերակով՝ 20% կանխավճար, 2% տարեկան տոկոսադրույք:"
    },
    {
      id: 12,
      name: "Կցվող և կախովի սրսկիչներ",
      img: img38,
      images: [img38, img89, img90],
      description: "Իտալական արտադրության Maggio ընկերության բարձրակարգ սրսկիչներ: Տարողունակություն՝ 300լ, 400լ, 500լ, 600լ, 800լ, 1000լ, 1500լ, 2000լ կամ 3000լ: Քաշ՝ 250-730 կգ: Պոմպ՝ 81-170 լ/ր: Ջրի շիթի հեռավորություն՝ 4,5-11 մ: Տրակտորի պահանջվող հզորություն՝ 25-100 ձ/ու: Բոլոր տեսակի պահեստամասերն առկա են: Սարքավորումների գները՝ կախված տարողունակությունից և հզորությունից, տարբեր են: Տրվում է 1 տարվա երաշխիք: Ձեռք բերեք լիզինգային տարբերակով՝ 20% կանխավճար, 2% տարեկան տոկոսադրույք:"
    },
    {
      id: 13,
      name: "Տուկապրես",
      img: img39,
      images: [img39, img91],
      description: "Լեհական Sipma ընկերության մամլիչներ (հավաքիչներ): Աշխատանքային լայնություն՝ 1780 մմ: Հակի լայնություն՝ 460 մմ: Հակի բարձրություն՝ 400 մմ: Հակի երկարություն՝ 300-1300 մմ: Տրակտորի պահանջվող հզորությունը սկսած 38 ձ/ու-ից: Քաշ՝ 1560 կգ: Տրվում է 1 տարվա երաշխիք: Ձեռք բերեք լիզինգային տարբերակով՝ 20% կանխավճար, 2% տարեկան տոկոսադրույք:"
    },
    {
      id: 14,
      name: "Մամլիչ (տուկապրես)",
      img: img40,
      images: [img40, img92, img93, img94],
      description: "Իտալական արտադրության մամլիչներ (պրեսներ) նախատեսված մոտոբլոկների համար: Հակերի քաշ՝ 18-20կգ, գլանաձև: Կարելի է կապել նաև ծառի ճյուղեր: Տրվում է 1 տարվա երաշխիք:"
    },
    {
      id: 15,
      name: "Գութան",
      img: img41,
      images: [img41],
      description: "Գութաններ լեհական ընկերությունից: Մարմինների քանակ՝ 2, 3, 4 (3+1) կամ 5 (3+2) հատ: Աշխատանքային խորություն՝ մինչև 35 սմ: Մարմինների միջև հեռավորություն՝ 72, 80 կամ 90 սմ: Քաշ՝ 470-970 կգ: Տրակտորի հզորությունը՝ 37-115 ձ/ու: Տրվում է 1 տարվա երաշխիք: Առկա են բազմաթիվ տեսակներ, տարբեր տեխնիկական բնութագրերով:"
    },
  ];

  const galleryImages = [
    {
      id: 1,
      name: "Առանցքակալներ",
      img: img54,
      description: "Եվրոպական արտադրության օրիգինալ առանցքակալներ Fortschritt E301, E302, E303 (գերմանական) ինքնագնաց խոտհնձիչների համար:"
    },
    {
      id: 2,
      name: "Փոկեր (ռեմեններ)",
      img: img55,
      description: "Գերմանական փոկեր (ռեմեններ) Fortschritt (գերմանական), Sampo, Bizon, Niva CK5 տրակտորների համար: Fortschritt E301, E302, E303, E023, E281 2150,3000,240,1725,2650,2800.2. BIZON 3000, 2940, 3812, 1500, 2050, 3010, 4260, 3350, 3164, 2280, 1060, 1270, 1670, 2130, 3200 SAMPO 3334, 4340 NIVA CK5 4325 (4 брата), 2600 (Вариатор барабана), 5300 (длинный), 3525 (8-ка), 1500 (Вентилятор), 2360 (Բեռնաթափ), 3400 (թեքմաս), 2000 (Գռոխոտ), 2650 (Մալոմատռաս), 4000 (Главный), 1220 (Քամհար), 1450 (Вариатора мотовила), 4500 (Саломонабиватель)"
    },
    {
      id: 3,
      name: "Կարդաններ",
      img: img56,
      description: "Եվրոպական արտադրության օրիգինալ կարդաններ, գտնվում են շատ լավ վիճակում:"
    },
    {
      id: 4,
      name: "MARAL կրկնակի մատներ",
      img: img57,
      description: "Իտալական արտադրության կրկնակի մատներ: Արտադրված է չափազանց կարծր մետաղից, դիմացկուն է, արդյունավետ աշխատում է նույնիսկ քարառատ հողակտորներում՝ ապահովելով բարձր արտադրողականություն և անխափանություն:"
    },
    {
      id: 5,
      name: "Սեգմենտներ",
      img: img58,
      description: "Գերմանական արտադրության բարձրակարգ սեգմենտներ նախատեսված՝ խոտ քաղող կոմբայններ և սարքավորումներ, հացահատիկային մշակաբույսերի կոմբայններ և սարքավորումներ, մոտոբլոկներ: Առկա են նաև հին գերմանական, օրիգինալ սեգմենտներ:"
    },
    {
      id: 6,
      name: "Վալեր",
      img: img59,
      description: "Առկա են Fortschritt (Ֆորշչրիտ) խոտհնձիչների բոլոր վալերը ներմուծված Գերմանիայից:"
    },
    {
      id: 7,
      name: "Fortschritt պահեստամասեր",
      img: img60,
      description: "Fortschritt (Ֆորշչրիտ)-Գերմանիայի բազմաթիվ օրիգինալ պահեստամասեր ներմուծված միայն Գերմանիայից:"
    },
    {
      id: 8,
      name: "Սալնիկներ",
      img: img61,
      description: "Առկա են Fortschritt (Ֆորշչրիտ) խոտհնձիչների մի շարք սալնիկներ: 42*42*7; 40*62*7; 40k5125-115; 62*80*10; 55*72*10; 28*40*10; 50*72*10; 5638/1; 30*52*7; 63*45*12; 45*62*12; 40*62*8; 110*140*12; 40*72*7; 5612n-412; 7425R461 և այլ համարների:"
    },
  ];

  const onlyImages = [
    img62,
    img63,
    img64,
    img65,
    img66,
    img67,
    img68,
    img69
  ];

  return (
    <>
      <header className="main-header">
        <div className="top-bar">
          <div className="container top-bar-content">

            <div className="working-hours">
              <p>Աշխ. ժամեր - 08<sup>00</sup> - 24<sup>00</sup> երկ.-կիր.</p>
            </div>

            <div className="social-icons">
              <a href="https://www.instagram.com/agro___tec" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
              <a href="https://www.tiktok.com/@agrotech_armenia" target="_blank" rel="noreferrer"><FaTiktok className="icon" /></a>
              <a href="https://www.facebook.com/agrotec001" target="_blank" rel="noreferrer"><FaFacebook className="icon" /></a>
              <a href="https://www.youtube.com/@Agrotec_arm" target="_blank" rel="noreferrer"><FaYoutube className="icon" /></a>
            </div>
          </div>
        </div>

        <div className="nav-bar">
          <div className="container nav-content">
            <div className="logo">
              <img src={logo} alt="Agrotec Logo" />
            </div>
            <div className="nav-right">
              <div className="contact-info">
                <a href="viber://chat?number=%2B37499303445" target="_blank" rel="noreferrer"><FaViber className="icon" /></a>
                <a href="https://wa.me/37499303445" target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /></a>
                <a href="https://t.me/your_telegram_username" target="_blank" rel="noreferrer"><FaTelegram className="icon" /></a>
                <span className="contact-text">ԿԱՊ ՄԵԶ ՀԵՏ</span>
              </div>
              <button className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </button>
            </div>
          </div>
        </div>

        <div className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-header" onClick={() => {
            window.scrollTo({ top: 700, behavior: "smooth" });
            toggleMenu(); // Լավ կլինի սեղմելուց հետո մենյուն փակվի
          }}>ՄԵՐ ՄԱՍԻՆ</div>

          <ul className="menu-list">
            <li onClick={() => { window.scrollTo({ top: 1800, behavior: "smooth" }); toggleMenu(); }}>
              ԳՅՈՒՂՏԵԽՆԻԿԱ ԵՎ ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ
            </li>
            <li onClick={() => { window.scrollTo({ top: 2400, behavior: "smooth" }); toggleMenu(); }}>
              SCHUMACHER ՀԱՄԱԿԱՐԳ
            </li>
            <li onClick={() => { window.scrollTo({ top: 3800, behavior: "smooth" }); toggleMenu(); }}>
              ՊԱՀԵՍՏԱՄԱՍԵՐ
            </li>
            {/* Այստեղ ուղղված է՝ հեռացվել է ավելորդ li-ն */}
            <li onClick={() => { window.scrollTo({ top: 4600, behavior: "smooth" }); toggleMenu(); }}>
              ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ
            </li>
            <li onClick={() => { window.scrollTo({ top: 5100, behavior: "smooth" }); toggleMenu(); }}>
              ԿԱՊ ՄԵԶ ՀԵՏ
            </li>
          </ul>
          <button className="close-menu" onClick={toggleMenu}>&times;</button>
        </div>
      </header>

      <section className="sec-1"></section>

      <div className="none-content">
        <p className='first'>Ընտրեք որակը, վստահությունը և արդյունավետությունը</p>
        <p className="second">
          ԸՆՏՐԵՔ <span className="brand">AGROTEC</span>
        </p>
      </div>

      <section className="sec-2">

        <div className="container">

          <div className="contents">

            <div className="content-1">
              <Swiper
                modules={[Autoplay, Navigation, Pagination, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="mySwiper"
              >
                <SwiperSlide><img src={img2} alt="img2" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="img3" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="img4" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="img5" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="img6" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="img7" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="img8" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="img9" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="img10" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img11} alt="img11" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img12} alt="img12" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img13} alt="img13" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img14} alt="img14" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img15} alt="img15" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img16} alt="img16" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img17} alt="img17" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img18} alt="img18" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img19} alt="img19" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img20} alt="img20" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img21} alt="img21" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img22} alt="img22" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img23} alt="img23" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img24} alt="img24" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img25} alt="img25" className="slider-img" /></SwiperSlide>
                <SwiperSlide><img src={img26} alt="img26" className="slider-img" /></SwiperSlide>
              </Swiper>
            </div>
            <div className="content-2">
              <div className="contents">
                <div className="cont">
                  <img src={icon1} alt="Բարձր որակ" />
                  <p>Բարձր որակ</p>
                </div>
                <div className="cont">
                  <img src={icon2} alt="Կայունություն" />
                  <p>Կայունություն</p>
                </div>
                <div className="cont">
                  <img src={icon3} alt="Հուսալիություն" />
                  <p>Հուսալիություն</p>
                </div>
                <div className="cont">
                  <img src={icon4} alt="Արդյունավետություն" />
                  <p className="one">Արդյունավետություն</p>
                </div>
                <div className="cont">
                  <img src={icon5} alt="Անխափան աշխատանք" />
                  <p>ԱՆԽԱՓԱՆ Աշխատանք</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-3">
        <div className="about-container">
          <h2 className="about-title">ՄԵՐ ՄԱՍԻՆ</h2>
          <div className="about-text-container">
            <p className="about-paragraph">
              Ագրոթեք/Agrotec (ԱՁ Ա. Հովհաննիսյան) հիմնադրվել է 2012 թվականին Գյումրիում, նպատակ ունենալով խթանելու գյուղատնտեսությունը և արտադրությունը Հայաստանի Հանրապետությունում: Մենք համագործակցում ենք եվրոպական առաջատար ընկերությունների հետ, ներմուծելով բազմազան տրակտորներ, սարքավորումներ և պահեստամասեր: Ագրոթեք/Agrotec-ը առաջարկում է նորարարական լուծումներ ու առաջադեմ սարքավորումներ գյուղացիական միավորներին և արտադրողներին:
            </p>
            {showFullText1 && (
              <div className="additional-text">
                <p className="about-paragraph">
                  Մենք իրականացնում ենք փորձի փոխանակում և ներդնում ենք արևմտյան առաջադեմ փորձը Հայաստանում, ապահովելով մեր գործընկերներին լավագույն տեխնոլոգիաներով: Ագրոթեք/Agrotec-ը հանդիսանում է եվրոպական առաջատար շուրջ 20 ընկերությունների պաշտոնական ներկայացուցիչը և գործընկերը Հայաստանում, ապահովելով լավագույն որակ և վստահություն մեր բոլոր հաճախորդների համար:
                </p>
              </div>
            )}
            <button onClick={toggleText1} className="read-more-btn">
              {showFullText1 ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
            </button>
          </div>
        </div>
      </section>

      <section className="sec-4">
        <section className="tech-section">
          <h2 className="tech-title">ԳՅՈՒՂՏԵԽՆԻԿԱ ԵՎ ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ</h2>
          <div className="container">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
              className="tech-swiper"
            >
              {machinery.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="tech-card" onClick={() => handleCardClick(item)}>
                    <div className="tech-img-box">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="tech-name">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Gallery Modal Swiper-ով */}
            {galleryOpen && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                  <button className="modal-close" onClick={handleCloseModal}>
                    ×
                  </button>
                  {selectedItem && (
                    <>
                      <h3 className="gallery-title">{selectedItem.name}</h3>
                      <Swiper
                        modules={[Navigation, Pagination, Thumbs]}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                        pagination={{ clickable: true }}
                        className="gallery-main-swiper"
                      >
                        {currentImages.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="gallery-main-img">
                              <img src={img} alt={`${selectedItem.name} - ${index + 1}`} />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      {currentImages.length > 1 && (
                        <Swiper
                          modules={[Navigation]}
                          spaceBetween={10}
                          slidesPerView={4}
                          className="gallery-thumbs-swiper"
                        >
                          {currentImages.map((img, index) => (
                            <SwiperSlide key={index}>
                              <div className="gallery-thumb-img">
                                <img src={img} alt={`thumbnail-${index}`} />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      )}
                      <p className="gallery-description">{selectedItem.description}</p>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      <section className="sec-5">
        <h2>SCHUMACHER ՀԱՄԱԿԱՐԳ</h2>
        <div className="container">
          <div className="about-text-container">
            <p className="about-paragraph">
              Շումախեր համակարգը նախատեսված է Ֆորշչրիտ (FORTSCHRITT), Դոն (ДОН), Ենիսեյ (ЕНИСЕЙ), Նիվա (НИВА), Սամպո (SAMPO) և այլ կոմբայնների ու կցորդիչների համար: Այս համակարգը խթանում է խոտհնձի արդյունավետությունն ու արագությունը, դարձնելով այն անփոխարինելի ձեր աշխատանքի մեջ: 2019թ-ից սկսած, Ագրոթեք/Agrotec-ը հանդիսանում է գերմանական արտադրության Շումախեր համակարգերի միակ պաշտոնական ներկայացուցիչը Հայաստանում: Մենք վաճառել և տեղադրել ենք 60-ից ավելի
            </p>
            {showFullText2 && (
              <div className="additional-text">
                <p className="about-paragraph">
                  ամբողջական-ռեդուկտորով համակարգեր, և հազարավոր մատնաշարեր, սեգմենտներ ու այլ հարակից պահեստամասեր: Այս համակարգի տեղադրմամբ շուրջ 14 առանցքակալներ և բազմաթիվ պահեստամասեր կփոխարինվեն ավելի պարզ և որակյալ նոր պահեստամասերով, որի արդյունքում խոտհնձիչը կաշխատի 25-30% ավելի արդյունավետ: Համակարգը աշխատում է անհամեմատ ավելի պարզ, զերծ պահելով բազմաթիվ խնդիրներից և ծախսերից: Մեզ մոտ մշտապես առկա են բոլոր տեսակի օրիգինալ պահեստամասերը: Համակարգի ձեռքբերման դեպքում տրվում է 1 տարվա երաշխիք ռեդուկտորի համար: Համակարգը հնարավոր է ձեռք բերել նաև լիզինգային տարբերակով: Զերծ մնացեք շուկայում առկա բազմաթիվ կրկնօրինակներից:
                </p>
              </div>
            )}
            <button onClick={toggleText2} className="read-more-btn">
              {showFullText2 ? <FaAngleUp className="icon" /> : <FaAngleDown className="icon" />}
            </button>
          </div>
        </div>
      </section>

      <section className="sec-6">
        <div className="container">
          <div className="contents">
            <div className="cont-1"><img src={img42} className='first-img' alt="img42" /></div>
            <p className="pahest">ՊԱՀԵՍՏԱՄԱՍԵՐ</p>

            <div className="content-2">
              <img src={img43} alt="img43" />
              <img src={img44} alt="img44" />
              <img src={img45} alt="img45" />
            </div>
            <div className="content-3">
              <img src={img46} alt="img46" />
              <img src={img47} alt="img47" />
              <img src={img48} alt="img48" />
              <img src={img49} alt="img49" />
              <img src={img50} alt="img50" />
              <img src={img51} alt="img51" />
              <img src={img52} alt="img52" />
            </div>
            <div className="content-4">
              <img src={img53} alt="img53" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-7">
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="tech-swiper"
          >
            {galleryImages.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="tech-card" onClick={() => setSelectedItem(item)}>
                  <div className="tech-img-box">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="tech-name">
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {selectedItem && !galleryOpen && (
            <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setSelectedItem(null)}>
                  ×
                </button>
                <img src={selectedItem.img} alt={selectedItem.name} />
                <h3>{selectedItem.name}</h3>
                <p>{selectedItem.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="sec-8">
        <h2>ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ</h2>
        <div className="container">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            className="gallery-swiper"
          >
            {onlyImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="gallery-card">
                  <div className="gallery-img-box">
                    <img src={image} alt={`gallery-image-${index}`} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>


      <section className="sec-9">
        <div className="contact-container">
          <div className="contact-card">

            {/* Քարտեզի հատված */}
            <div className="map-section">
              <div className="map-placeholder">
                {/* Այստեղ կարող եք տեղադրել Google Maps iframe-ը */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12111.436353986406!2d43.840742!3d40.785316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb89467610f3%3A0xf639a049969f6940!2sGyumri%2C%20Armenia!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Gyumri Map"
                ></iframe>
              </div>
            </div>

            {/* Տեղեկատվության հատված */}
            <div className="info-section">
              <h2>ԿԱՊ ՄԵԶ ՀԵՏ</h2>
              <h3>ՍՏԱՑԵՔ ՁԵՐ ԲՈԼՈՐ ՀԱՐՑԵՐԻ<br />ՊԱՏԱՍԽԱՆՆԵՐԸ</h3>

              <div className="contact-grid">
                <div className="contact-item">
                  <div className="icon-wrapper"><Mail /></div>
                  <span>info@agrotec.am</span>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper"><Phone /></div>
                  <span>+374 (94) 927 972</span>
                </div>

                <div className="contact-item">
                  <div className="icon-wrapper"><MapPin /></div>
                  <span>Ֆուրմանովի փողոց 1/29,<br />3018 Գյումրի, Հայաստան</span>
                </div>
              </div>

              <div className="social-icons">
                <div className="social-icon"><MessageCircle size={20} /></div>
                <div className="social-icon"><Phone size={20} /></div>
                <div className="social-icon"><Send size={20} /></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="footer-container">
        <nav className="footer-nav">
          <a href="#" className="footer-nav-link">ՄԵՐ ՄԱՍԻՆ</a>
          <a href="#" className="footer-nav-link">ԳՅՈՒՂՏԵԽՆԻԿԱ ԵՎ ՍԱՐՔԱՎՈՐՈՒՄՆԵՐ</a>
          <a href="#" className="footer-nav-link">SCHUMACHER ՀԱՄԱԿԱՐԳ</a>
          <a href="#" className="footer-nav-link">ՊԱՀԵՍՏԱՄԱՍԵՐ</a>
          <a href="#" className="footer-nav-link">ՄԵՐ ԳՈՐԾԸՆԿԵՐՆԵՐԸ</a>
          <a href="#" className="footer-nav-link">ԿԱՊ ՄԵԶ ՀԵՏ</a>
        </nav>

        <div className="footer-content">
          <div className="footer-info">
            <div className="info-row">
              <MapPin size={18} />
              <span>Ֆուրմանովի փողոց 1/29, 3018 Գյումրի, Հայաստան</span>
            </div>
            <div className="info-row">
              <Mail size={18} />
              <span>info@agrotec.am</span>
            </div>
            <div className="info-row">
              <Phone size={18} />
              <span>+374 (94) 927 972</span>
            </div>
          </div>

          <div className="footer-booking">

            <img src={logo} alt="" />
          </div>

          <div className="footer-socials">
            <a href="https://www.instagram.com/agro___tec" target="_blank" rel="noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://www.tiktok.com/@agrotech_armenia" target="_blank" rel="noreferrer"><FaTiktok className="icon" /></a>
            <a href="https://www.facebook.com/agrotec001" target="_blank" rel="noreferrer"><FaFacebook className="icon" /></a>
            <a href="https://www.youtube.com/@Agrotec_arm" target="_blank" rel="noreferrer"><FaYoutube className="icon" /></a>
          </div>
        </div>


      </footer>

    </>
  );
}

export default Home;