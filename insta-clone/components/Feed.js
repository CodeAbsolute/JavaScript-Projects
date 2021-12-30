import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggestions from "./Suggestions";

function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:max-w-6xl md:max-w-3xl mx-auto 
      ${!session && "!grid-cols-1 !max-w-3xl"}
    `}
    >
      <div className="col-span-2">
        {/* Left: Section Stories at top */}
        <section className="col-span-2">
          <Stories />
        </section>
        {/* Posts */}
        <section className="col-span-2">
          <Posts />
        </section>
      </div>
      {/* Right: Mini- profile & Suggestions */}
      {session && (
        <section className="hidden xl:inline-grid lg:col-span-1">
          <div className="fixed ">
            <MiniProfile />
            <Suggestions />
          </div>
        </section>
      )}
    </main>
  );
}

export default Feed;
