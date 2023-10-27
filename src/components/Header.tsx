import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isInHome = pathname === "/";

  return (
    <div className="flex flex-col items-center w-full justify-center mb-16">
      <Link to="/">
        <div className="w-[150px] h-[150px] ">
          <img src="/logo.png" />;
        </div>
      </Link>
      <div className="w-11/12 md:w-2/3 sm:w1/3 flex flex-col gap-4 text-center">
        <p>
          بسم الله الرحمن الرحيم
          <br /> وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ وَمِن رِّبَاطِ
          الْخَيْلِ تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ وَآخَرِينَ
          مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ اللَّهُ يَعْلَمُهُمْ ۚ وَمَا
          تُنفِقُوا مِن شَيْءٍ فِي سَبِيلِ اللَّهِ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ
          لَا تُظْلَمُون [الأنفال-60]
        </p>

        {isInHome && (
          <p className="text-xl md:text-2xl  underline decoration-green-400">
            موقع يضم مجموعه من المنتجات والشركات التابعة{" "}
            <span className="text-red-500">للكيان الصهيوني</span> -لعنهم الله-
            او داعميهم وبعض البدائل العربية لهذه الشركات
          </p>
        )}
      </div>
      <p className="text-center text-lg md:text-xl mt-10">
        هذا الموقع تحت الانشاء والتطوير ولم يتم التاكد من صحة اغلب المعلومات
        الموجودة فيه
        <br />
        اذا اردت المساعدة في تطوير الموقع او اضافة معلومات او تصحيحها
        <br />
        يرجى التواصل&nbsp;
        <a className="text-blue-500 underline" href="https://t.me/ahmedNasser1">
          علي التليجرام
        </a>
        &nbsp; او علي&nbsp;
        <a className="text-blue-500 underline" href="https://t.me/ahmedNasser1">
          الفيس بوك{" "}
        </a>
      </p>
    </div>
  );
};

export default Header;
