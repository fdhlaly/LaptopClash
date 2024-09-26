const GetLaptopInfo = ({ onSubmit, form, onInputChange }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <form onSubmit={onSubmit}>
        <p className="text-2xl font-semibold mb-4 text-center">
          Pilih Laptop Kamu!
        </p>

        <div className="w-full gap-4 p-4 flex flex-col">
          <div className=" flex justify-center md:flex-row flex-col gap-4">
            <div className="flex flex-col gap-4 mb-4 p-4 flex-1 shadow shadow-[#cccccc] rounded">
              <label htmlFor="firstLaptop" className="text-xl">
                Laptop Pertama
              </label>
              <input
                type="text"
                name="firstLaptop"
                placeholder="Tulis model laptop di sini"
                value={form.firstLaptop}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Prosesor</label>
              <input
                type="text"
                name="firstProcessor"
                placeholder="Tulis jenis prosesor di sini"
                value={form.firstProcessor}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Penyimpanan</label>
              <input
                type="text"
                name="firstStorage"
                placeholder="Tulis kapasitas penyimpanan di sini"
                value={form.firstStorage}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">RAM</label>
              <input
                type="text"
                name="firstRAM"
                placeholder="Tulis kapasitas RAM di sini"
                value={form.firstRAM}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Harga</label>
              <input
                type="text"
                name="firstPrice"
                placeholder="Tulis harga di sini"
                value={form.firstPrice}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>

            <div className="flex flex-col gap-4 mb-4 p-4 flex-1 shadow shadow-[#cccccc] rounded">
              <label htmlFor="secondLaptop" className="text-xl">
                Laptop Kedua
              </label>
              <input
                type="text"
                name="secondLaptop"
                placeholder="Tulis model laptop di sini"
                value={form.secondLaptop}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Prosesor</label>
              <input
                type="text"
                name="secondProcessor"
                placeholder="Tulis jenis prosesor di sini"
                value={form.secondProcessor}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Penyimpanan</label>
              <input
                type="text"
                name="secondStorage"
                placeholder="Tulis kapasitas penyimpanan di sini"
                value={form.secondStorage}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">RAM</label>
              <input
                type="text"
                name="secondRAM"
                placeholder="Tulis kapasitas RAM di sini"
                value={form.secondRAM}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />

              <label className="text-xl">Harga</label>
              <input
                type="text"
                name="secondPrice"
                placeholder="Tulis harga di sini"
                value={form.secondPrice}
                onChange={onInputChange}
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                required
              />
            </div>
          </div>

          <div className="mb-4 p-4 shadow shadow-[#cccccc] rounded">
            <label htmlFor="usage" className="text-xl">
              Buat Apa?
            </label>
            <select
              name="usage"
              value={form.usage}
              onChange={onInputChange}
              className="select select-bordered w-full bg-gray-700 text-white mt-4"
              required
            >
              <option value="">Pilih keperluan</option>
              <option value="gaming">Gaming</option>
              <option value="belajar">Belajar</option>
              <option value="kerja">Kerja</option>
              <option value="coding">Coding</option>
              <option value="keperluan sehari hari">
                Keperluan sehari-hari
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-600 transition text-white p-4 rounded-md mx-auto w-full"
        >
          Bandingkan Sekarang!
        </button>
      </form>
    </div>
  );
};

export default GetLaptopInfo;
