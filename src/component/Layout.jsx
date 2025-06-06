import './Layout.scss';
import Hero from './hero';
import Aboutus from './aboutus';
import Experience from './Experience';
import OurServices from './OurServices';
import ChoWorMiss from './ChoWorMiss';
// import AboutUsM from './AboutusM'; // Uncomment if needed

function Layout() {
    return (
        <>
            <section className="hero">
                <Hero />
            </section>

            <section className="aboutus-section">
                <Aboutus />
            </section>

            <section className="experience-section">
                <Experience />
            </section>

            <section className="services-section">
                <OurServices />
            </section>

            <section className="work-section">
                <ChoWorMiss />
            </section>
        </>
    );
}

export default Layout;
