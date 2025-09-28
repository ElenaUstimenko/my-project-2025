import classes from './Main.module.scss';
import { Header } from '@/components/Header';
import { FirstSection } from './FirstSection';
import { About } from './About';
import { Places } from './Places';
import { Footer } from '@/components/Footer';
import { Cookie } from '@components/Cookie';

export const Main = () => {

    return (
        <main className={classes.main}>
            <Header />
            <FirstSection />
            <About />
            <Places />
            <Footer />
            <Cookie />
        </main>
    );
};