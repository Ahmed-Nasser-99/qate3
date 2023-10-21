const Header = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div className="w-[150px] h-[150px] ">
        <img src="/logo.png" />;
      </div>
      <div className="w-11/12 md:w-2/3 sm:w1/3 flex flex-col gap-4">
        <p className="text-center">
          بسم الله الرحمن الرحيم
          <br /> وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ وَمِن رِّبَاطِ
          الْخَيْلِ تُرْهِبُونَ بِهِ عَدُوَّ اللَّهِ وَعَدُوَّكُمْ وَآخَرِينَ
          مِن دُونِهِمْ لَا تَعْلَمُونَهُمُ اللَّهُ يَعْلَمُهُمْ ۚ وَمَا
          تُنفِقُوا مِن شَيْءٍ فِي سَبِيلِ اللَّهِ يُوَفَّ إِلَيْكُمْ وَأَنتُمْ
          لَا تُظْلَمُون [الأنفال-60]
        </p>
        <p className="text-center text-xl md:text-2xl  underline decoration-green-400">
          موقع يضم مجموعه من المنتجات والشركات التابعة{" "}
          <span className="text-red-500">للكيان الصهيوني</span> -لعنهم الله- او
          داعميهم وبعض البدائل العربية لهذه الشركات
        </p>
      </div>
    </div>
  );
};

export default Header;
