import Image from 'next/image'

import {
  House,
  MagnifyingGlass,
  Book,
  PlusSquare,
  Heart,
  CaretLeft,
  CaretRight,
  CaretDown,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Queue,
  SpeakerHifi,
  SpeakerSimpleHigh,
  ArrowsOutSimple,
} from '../components/shared/icons'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
            <div className="w-2 h-2 bg-gray-200 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href="/"
              className="flex items-center gap-4 text-s font-semibold text-zinc-200"
            >
              <House size={24} weight="fill" />
              Home
            </a>
            <a
              href="/"
              className="flex items-center gap-4 text-s font-semibold text-zinc-200"
            >
              <MagnifyingGlass size={24} />
              Search
            </a>
            <a
              href="/"
              className="flex items-center gap-4 text-s font-semibold text-zinc-200"
            >
              <Book size={24} />
              Your Library
            </a>
          </nav>

          <nav className="space-y-5 mt-10">
            <a
              href="/"
              className="flex items-center gap-4 text-s font-semibold text-zinc-200"
            >
              <PlusSquare size={24} weight="fill" />
              Create Playlist
            </a>
            <a
              href="/"
              className="flex items-center gap-4 text-s font-semibold text-zinc-200"
            >
              <Heart size={24} weight="fill" />
              Liked Songs
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-gray-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              jRock
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              jPOP
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix 1
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Discover Weekly
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix 4
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/80 p-1">
              <CaretLeft size={18} />
            </button>
            <button className="rounded-full bg-black/20 p-1">
              <CaretRight size={18} />
            </button>

            <nav className="flex items-center gap-14 ml-10 font-semibold">
              <a href="#">Playlists</a>
              <a href="#">Podcasts</a>
              <a href="#">Artists</a>
              <a href="#">Albums</a>
            </nav>

            <div className="flex items-center gap-2 ml-auto">
              <Image
                src="/perfil.jpeg"
                width={32}
                height={32}
                alt="Foto de Perfil"
                className="rounded-full -mr-6 z-10"
              />
              <button className="flex items-center gap-1 bg-zinc-950 p-1 rounded-full">
                <span className="text-ms font-semibold ml-5">
                  Julian Andrade
                </span>
                <CaretDown weight="fill" />
              </button>
            </div>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good afternoon</h1>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>jRock</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>jPOP</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>Daily Mix 1</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>Discover Weekly</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>Top Brasil</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
            <a
              href="#"
              className="group bg-white/10 rounded flex items-center gap-4 hover:bg-white/20"
            >
              <Image
                src="/image01.jpg"
                width={104}
                height={104}
                alt="Capa do álbum Coldplay"
              />
              <strong>Daily Mix 4</strong>

              <button className="bg-green-500 rounded-full p-2 drop-shadow-lg ml-auto mr-5 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-3xl mt-10">
              Made For Julian Andrade
            </h2>
            <button className="mt-10 font-semibold text-zinc-500">
              Show all
            </button>
          </div>

          <div className="grid grid-cols-5 gap-4 mt-10">
            <a
              href="#"
              className="group bg-white/5 rounded p-4 flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/image01.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt=""
              />
              <button className="bg-green-500 -mt-16 rounded-full p-2 drop-shadow-lg ml-auto mr-3 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
              <strong className="font-semibold mt-4">jRock</strong>
              <p className="text-xs text-zinc-500 leading-5">
                Post Malone, The Weekend, Linkin Park, Coldplay...
              </p>
            </a>

            <a
              href="#"
              className="group bg-white/5 rounded p-4 flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/image01.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt=""
              />
              <button className="bg-green-500 -mt-16 rounded-full p-2 drop-shadow-lg ml-auto mr-3 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
              <strong className="font-semibold mt-4">jPOP</strong>
              <p className="text-xs text-zinc-500 leading-5">
                Post Malone, The Weekend, Linkin Park, Coldplay...
              </p>
            </a>

            <a
              href="#"
              className="group bg-white/5 rounded p-4 flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/image01.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt=""
              />
              <button className="bg-green-500 -mt-16 rounded-full p-2 drop-shadow-lg ml-auto mr-3 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
              <strong className="font-semibold mt-4">Daily Mix 1</strong>
              <p className="text-xs text-zinc-500 leading-5">
                Post Malone, The Weekend, Linkin Park, Coldplay...
              </p>
            </a>

            <a
              href="#"
              className="group bg-white/5 rounded p-4 flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/image01.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt=""
              />
              <button className="bg-green-500 -mt-16 rounded-full p-2 drop-shadow-lg ml-auto mr-3 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
              <strong className="font-semibold mt-4">Discover Weekly</strong>
              <p className="text-xs text-zinc-500 leading-5">
                Post Malone, The Weekend, Linkin Park, Coldplay...
              </p>
            </a>

            <a
              href="#"
              className="group bg-white/5 rounded p-4 flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/image01.jpg"
                className="w-full rounded"
                width={104}
                height={104}
                alt=""
              />
              <button className="bg-green-500 -mt-16 rounded-full p-2 drop-shadow-lg ml-auto mr-3 hover:bg-green-500/80 invisible group-hover:visible">
                <CaretRight size={28} color="09090b" weight="fill" />
              </button>
              <strong className="font-semibold mt-4">Top Brasil</strong>
              <p className="text-xs text-zinc-500 leading-5">
                Post Malone, The Weekend, Linkin Park, Coldplay...
              </p>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Image
            src="/image01.jpg"
            className="rounded"
            width={80}
            height={80}
            alt=""
          />
          <div className="flex flex-col gap-1">
            <strong>In My Place</strong>
            <span className="text-xs text-zinc-500">Coldplay</span>
          </div>
          <button>
            <Heart size={20} weight="bold" className="hover:text-zinc-600" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-10">
            <Shuffle size={20} className="text-zinc-500" />
            <SkipBack size={20} className="text-zinc-500" />

            <button className="bg-gray-100 rounded-full p-2 drop-shadow-lg hover:bg-gray-500/80">
              <CaretRight size={28} color="09090b" weight="fill" />
            </button>

            <SkipForward size={20} className="text-zinc-500" />
            <Repeat size={20} className="text-zinc-500" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-zinc-500">0:00</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="h-1 rounded-full w-40 bg-zinc-100"></div>
            </div>
            <span className="text-sm text-zinc-500">4:25</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Queue size={18} className="text-zinc-500" />
          <SpeakerHifi size={18} className="text-zinc-500" />
          <SpeakerSimpleHigh size={18} className="text-zinc-500" />
          <div className="h-1 rounded-full w-20 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-100"></div>
          </div>
          <ArrowsOutSimple size={18} className="text-zinc-500" />
        </div>
      </footer>
    </div>
  )
}
