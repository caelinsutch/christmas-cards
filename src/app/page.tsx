import {DraggablePhoto} from "@/components/draggable-photo";
import ChristmasBar from "@/assets/images/christmas-bar.png"
import Europe from "@/assets/images/europe.png"


export default function Home() {
  return (
    <div className="flex min-h-screen bg-amber-100 p-4">
      <DraggablePhoto
        initialTop="5vh"
        initialRight="10vw"
        src={ChristmasBar}
      caption="Riya & Caelin at Christmas Bar"/>
      <DraggablePhoto
        initialTop="20vh"
        initialRight="80vw"
        src={Europe}
      caption="In Europe"/>
      <div
        style={{
          boxShadow: '2px 8px 4px 0px rgba(0, 0, 0, 0.35)'
        }}
        className="flex flex-col h-fit p-8 mx-auto max-w-screen-sm bg-amber-50 border-stone-400 border border-2 rounded-xl gap-16">
        <header className="flex flex-col items-center gap-6">
          <h1 className="leading text-2xl font-bold text-stone-800">
            <span className="text-green-500">
              merry
            </span>
            {' '}
            <span className="text-green-500">
              christmas
            </span>
          </h1>
          <p>
            from
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-800">
            riya + caelin
          </h1>
        </header>

        <p>
          Dear Friends and family,
          <br/>
          <br/>
          Wishing you happy holidays and a very happy new year. It will be hard to beat this one! Riya (23) and Caelin
          (22) graduated college (go bears!) and have moved to major metropolitan cities.
          <br/>
          <br/>

          Riya resides in New York city and is working as a software engineer for Disney! Caelin has moved to San
          Francisco and is leading his startup, Lookbk! He also joined the Alaskan Airline Sky Lounge as he has become a
          frequent flyer visiting her.
          <br/>
          <br/>

          Riya has taken a keen interest in cooking, now that she finally has a kitchen. Caelin has been mixing some
          sick beats on his Dj deck as DJ Bandit.
          <br/>
          <br/>

          We are thankful for those of you who are close by and so excited for those of you who are far doing cool
          things. Let us know what you&#39;re up to!
          <br/>
          <br/>
          Love, Riya & Caelin
        </p>

      </div>
    </div>
  );
}
