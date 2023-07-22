/* eslint-disable react/no-unescaped-entities */
const Gallery = () => {
  return (
    <div className="p-4 md:p-14 bg-base-100">
      <h1 className="text-center mb-5 font-semibold text-4xl text-sky-700">
        College Graduates' Memories
      </h1>

      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://today.thefinancialexpress.com.bd/uploads/1568830224.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://www.iict.ruet.ac.bd/public/storage/events/ruet-shaheed-minar-a-favorite-place-of-ruet-students.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://www.bubt.edu.bd/assets/frontend/images/165414231118.JPG"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2022/06/18/canadian-international-school.jpeg&anchor=top"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://pbs.twimg.com/media/FrShGvhaQAE8jeH.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpoRIgXt-wELa0SeYdvZ06lLA5UCXSma5Q2MaKv3wAxfuZXFqQ5Uk4ux6P1Ns1l2oFjg&usqp=CAU"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://oldsite.diu.ac/wp-content/themes/diu-theme-lite-v1/images/convocation/fourth-covocation4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://dailyasianage.com/library/2018/10/06/1538849533_4.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://convocation.du.ac.bd/convocation_image/DU-Convocation3.jpg"
          />
          <img
            src="https://gumlet.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2017%2F03%2F04%2F06_convocation-_du_md-pramanik_040317_0008.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=732"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
