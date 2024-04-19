import React from "react";
import photo from "./imgs/фото.png";
import img1 from "./imgs/image 1.png";
import img2 from "./imgs/image 2.png";
import img3 from "./imgs/image 3.png";
const App = () => {
  return (
    <div>
      <div className="grid grid-cols-10  gap-4">
        <div className="hidden sm:hidden md:col-span-1 md:block">
          <div className=" relative;">
            <div
              className=" w-2/3 h-screen"
              style={{ backgroundColor: "#FDE000" }}
            ></div>
            <div className="absolute top-10 start-10 ">
              <div
                className="  border-spacing-2   "
                style={{ backgroundColor: "#FDE000", borderRadius: "50%" }}
              >
                <button className=" cursor-pointer rounded-full text-xl table1 border-white border-2 p-10 text-white py-8">
                  &#60;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-10 sm:col-span-10 md:col-span-3">
          {" "}
          <div className="">
            <div className="flex">
              <div className="  p-4 my-2  rounded-lg shadow  w-full">
                <h5 className="mb-5 text-center text-2xl font-bold tracking-tight">
                  Kia Presto 2019
                </h5>
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Марка</p>
                  <p>Kia</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Модель</p>
                  <p> Presto</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Пробег</p>
                  <p>500 км</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Год</p>
                  <p>2019 </p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Коммисия парка</p>
                  <p>0.1%</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Коробка передач</p>
                  <p>Автомат</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Тип топлива</p>
                  <p>Бензин</p>
                </div>
                <hr />
                <div className="font-normal pt-5 flex justify-between text-gray-700 ">
                  <p>Название парка</p>
                  <p>Predator</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl shadow   mt-6">
              <div>
                <h5 className="mb-2  font-bold tracking-tight text-center">
                  Выберите стоимость и схему дней
                </h5>
              </div>

              <form className=" mx-auto my-6 ">
                <select
                  id="countries"
                  className="bg-gray-50 px-6 py-5 border w-full rounded-lg border-gray-300  "
                >
                  <option selected>1 650 ₽</option>
                  <option value="1 650 ₽">1 650 ₽</option>
                  <option value="1 650 ₽">1 650 ₽</option>
                  <option value="1 650 ₽">1 650 ₽</option>
                  <option value="1 650 ₽">1 650 ₽</option>
                </select>
              </form>
              <button
                className="w-full rounded-2xl p-5"
                style={{ backgroundColor: "#FDE000" }}
              >
                Забронировать
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-10 sm:col-span-10 md:col-span-6 ms-10">
            <div className="w-[90%]">
              <div className="relative  my-2 ">
                <div className="w-full">
                  <img src={photo} alt="" />
                </div>
                <div className="absolute bottom-3 start-10">
                  <img src={img1} alt="" />
                </div>
                <div className="absolute bottom-3 start-44">
                  <img src={img2} alt="" />
                </div>
                <div className="absolute bottom-3 start-80">
                  <img src={img3} alt="" />
                </div>
              </div>

              <div className="px-5 py-3 rounded-lg shadow  ">
                <div className="font-normal  flex justify-between text-gray-700 ">
                  <p>Адрес парка</p>
                  <p>График работы</p>
                </div>
                <div className="font-normal pt-3 flex justify-between text-gray-700 ">
                  <div className="flex items-center gap-2">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <p className="text-blue-500 cursor-pointer">
                      Москва, ул. Поморская 15с1, 127410
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <i class="fa-regular fa-clock"></i>{" "}
                      <p>Пн - Пт: 10:00 - 22:00</p>
                    </div>
                    <p>Сб - Вс: выходной</p>
                  </div>
                </div>
                <hr />
                <div className="font-normal pt-5 text-gray-700 ">
                  <p>Телефон</p>
                  <br />
                  <p> +7(999) 123-45-67</p>
                </div>
                <hr />

                <form className=" mx-auto">
                  <select
                    id="underline_select"
                    className="block py-2.5 px-0 w-full text-sm border-none"
                  >
                    <option selected>О парке</option>
                    <option value="">О парке</option>
                    <option value="">О парке</option>
                    <option value="">О парке</option>{" "}
                  </select>
                </form>
                <hr />
                <div className="text-right">
                  <button
                    className="py-2 mt-3 px-5 rounded-lg"
                    style={{ backgroundColor: "#FDE000" }}
                  >
                    Смотреть похожие
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
