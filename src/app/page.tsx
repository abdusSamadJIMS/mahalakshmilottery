import { dailyList } from "@/lib/dummydata";
import Link from "next/link";


export default function Home() {
  const loop1 = [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 1, 21, 21, 21, 212, 12, 12, 1, 2, 12, 12, 12, 12,]
  let loop2: number[] = [];
  for (let i = 0; i < 30; i++) {
    loop2.push(i)
  }
  return (
    <main className="w-screen">
      <div className="hero min-h-screen" style={{ backgroundImage: 'url(/heroLandscapeImg.jpg)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white text-center-content">
          <div className="max-w-lg mt-44">
            <h1 className="mb-5 text-5xl font-bold rosario ">Maha Lakshmi Lottery</h1>
            <Link href={''} className="btn btn-primary rounded-full">See Result</Link>
          </div>
        </div>
      </div>
      <div className="lastResult  flex justify-center items-center my-20">
        <div className="stats shadow shadow-primary  mx-auto">
          <div className="stat flex justify-center items-center flex-col gap-5">
            <div className="stat-title font-bold  sm:text-xl animate-pulse">LAST LOTTERY NUMBER</div>
            <div className="stat-value font-black  sm:text-5xl">89</div>
            <div className="stat-desc font-bold  sm:text-lg">08:00PM</div>
          </div>
        </div>
      </div>

      <div className="dailyChart md:px-10 border-2 border-red-500 p-3 mx-5 rounded-lg mb-10">
        <div className="max-w-lg  mx-auto border-b-2 mb-5 border-b-accent">
          <h2 className="rosario mb-5 text-lg md:text-5xl font-bold rosario text-center text-accent">Today&apos;s Result</h2>
        </div>
        <div className="sm:overflow-x-auto">
          <table className="table sm:tabs-xs ">
            {/* head */}
            <thead>
              <tr className="md:text-2xl">
                <th className="max-sm:py-1 max-sm:px-0 max-sm:text-xs border bg-accent text-neutral  text-center">Sno.</th>
                <th className="max-sm:py-1 max-sm:px-0 max-sm:text-xs border bg-accent text-neutral text-center">Game</th>
                <th className="max-sm:py-1 max-sm:px-0 max-sm:text-xs border bg-accent text-neutral text-center">Time</th>
                <th className="max-sm:py-1 max-sm:px-0 max-sm:text-xs border bg-accent text-neutral text-center">Old</th>
                <th className="max-sm:py-1 max-sm:px-0 max-sm:text-xs border bg-accent text-neutral text-center">New</th>
              </tr>
            </thead>
            <tbody>
              {
                dailyList.map((list, i) => (


                  <tr key={i + 'daily'} className="hover">
                    <th className="max-sm:px-0 border border-accent  text-center ">{i + 1}</th>
                    <th className="max-sm:px-0 border border-accent  text-center max-sm:text-xs">{list.game}</th>
                    <th className="max-sm:px-0 border border-accent  text-center max-sm:text-xs">{list.Time}</th>
                    <th className="max-sm:px-0 border border-accent  text-center bg-error max-sm:text-xs">{list.old + i}</th>
                    <th className="max-sm:px-0 border border-accent  text-center bg-success max-sm:text-xs">{list.new - i}</th>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="DetailedChart md:px-10 border-2 border-red-500 p-3 mx-5 rounded-lg mb-10">
        <div className="max-w-lg  mx-auto border-b-2 mb-5 border-b-accent">
          <h2 className="mb-5 text-lg md:text-5xl font-bold rosario text-center text-accent">Maha Lakshmi Lottery Chart</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs border">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-primary text-center text-white">Date</th>
                <th className="border bg-accent text-neutral  text-center">01:00 <br />AM</th>
                <th className="border bg-accent text-neutral text-center">02:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">03:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">04:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">05:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">06:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">07:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">08:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">09:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">10:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">11:00<br />AM</th>
                <th className="border bg-accent text-neutral text-center">12:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">01:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">02:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">03:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">04:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">05:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">06:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">07:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">08:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">09:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">10:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">11:00<br />PM</th>
                <th className="border bg-accent text-neutral text-center">12:00 <br />AM</th>
              </tr>
            </thead>
            <tbody>
              {
                loop2.map((l, i) => (

                  <tr key={i} className="hover">
                    <th className="border  bg-accent text-neutral  text-center">{l + 1}/03/2024</th>
                    {
                      loop1.map((list, i) => (
                        <td key={i} className="border text-center border-primary">54</td>
                      ))
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
