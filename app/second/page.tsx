export default function secondPage() {
  return (
    <>
    <div className="flex justify-center mx-auto">
      <span className="text-3xl font-bold">Работа</span>
    </div>
    <p className="py-3 max-w-5xl mx-auto text-xl">Помимо дома, вторым местом, где меня можно было найти, это работа. Здесь я познакомился со своими коллегами, у каждого из которых история одна круче другой.</p>
    <p className="py-3 max-w-5xl mx-auto text-xl">За это время происходило немало событий. Было весело, когда приходилось упаковывать по 150 товаров в заказ, и не очень, когда его отменяли. Эмоций было в достатке.</p>
    <p className="py-3 max-w-5xl mx-auto text-xl">На фото стоит большой друг Вадик, а в руках у него селфипалка, (штык для очистки бассейнов) которая тянется до 20м</p>
    <div className="justify-center flex">
      <img src="work.jpg" className="rounded-2xl max-h-110" />
    </div> 
    </>
  );
}