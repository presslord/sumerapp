export default function Home() {
  return (
      <div className="mx-auto">
        <div className="text-center my-3">
          <span className="text-4xl border-gray-300 rounded-2xl px-3 sticky font-semibold">Как я провел лето</span>
        </div>
        <div className=" border-gray-300 rounded-2xl py-3 my-10 px-3 text-center">
          <p className="font-medium text-xl">
            Этим летом в моей жизни произошло много разных событий, небольшую часть я решил оставить здесь и показать вам ;p
          </p>
        </div>
        <img src="luna.jpg" className="justify-center mx-auto max-h-125 rounded-xl"></img>
      </div>
  );
}
