import CreateKidsProfile from "../components/CreateKidsProfile/CreateKidsProfile";
import DownloadShows from "../components/DownloadShows/DownloadShows";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import TvEnjoy from "../components/TvEnjoy/TvEnjoy";
import WatchEverywhere from "../components/WatchEverywhere/WatchEverywhere";

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-2 bg-dark">
            <Hero />
            <TvEnjoy />
            <DownloadShows />
            <WatchEverywhere />
            <CreateKidsProfile />
            <FAQ />
            <Footer />
            <div className="text-center py-4 bg-black text-white font-normal">
                made with&nbsp;&nbsp;❤️&nbsp;&nbsp;by Ankit Agrawal
            </div>
        </div>
    );
}